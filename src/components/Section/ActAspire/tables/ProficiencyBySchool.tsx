import * as React from 'react'
import styled from 'styled-components';
const uuidv4 = require('uuid/v4');

import {
    tableDataRow,
    ColumnHeader,
    RowHeader,
    StyledTable
} from '../../../AccessibleTable';

import { SchoolSubject } from '../constants';

declare interface Props {
    subject: SchoolSubject,
    data: any,
    grade: number,
}

declare interface Edge {
    node: Node
}

declare interface Node {
    [fieldname: string]: string,
}

const ProficiencyBySchool: React.SFC<Props> = ({data, subject, grade}) => {
    const dataField = `allAaGrade${grade}Csv`;
    const { [dataField]: { edges } } = data;
    const [ firstHeaders, secondHeaders, ...rows ]: Edge[] = edges;
    return (
        <StyledTable>
            <caption>
                Act Aspire Results for {subject} by School for Grade {grade}
            </caption>
            <thead>
                {tableHeaders(firstHeaders, secondHeaders)}
            </thead>
            <tbody>
                {edges.reduce(subjectReducerFn(subject), [])
                    .slice(2)
                    .map(tableDataRow(dataCellFn))}
            </tbody>
        </StyledTable>
    );
}

function tableHeaders(firstHeaders: Edge, secondHeaders: Edge): JSX.Element[] {
    const { node: firstRow } = firstHeaders;
    const { node: secondRow } = secondHeaders;
    const firstRowFields = Object.keys(firstRow).sort(fieldSort);
    const secondRowFields = Object.keys(secondRow).sort(fieldSort);

    return [
        (
            <tr>
                <th scope="col" rowSpan={2}>Achievement Level</th>
                {firstRowFields.slice(1)
                    .filter(field => (firstRow[field].length > 0))
                    .map(field => (<th scope="colgroup" colSpan={2}>{firstRow[field]}</th>
                ))}
            </tr>
        ),
        (
            <tr>
                {secondRowFields.slice(1)
                    .map(field => (<th scope="col">{secondRow[field]}</th>))}
            </tr>
        )
    ];
}

function dataCellFn(rowData: Node) {
    return (field: string, i: number) => {
        const data = rowData[field];
        if ( i === 0) {
            return <RowHeader key={uuidv4()}>{data}</RowHeader>;
        } else {
            return <td key={uuidv4()}>{data}</td>;
        }
    }
}

function subjectReducerFn(subject: string) {
    const re = new RegExp(subject, 'i');
    let found = false;
    let startIndex = 0;
    return (table, line: Edge, index) => {
        console.log(subject, line.node.field1);
        if (re.test(line.node.field1)) {
            found = true;
            startIndex = index;
        }

        if (found && ((index - startIndex) < 7)) {
            return [...table, line];
        } else {
            return table;
        }
    }
}

function fieldSort(fieldA: string, fieldB: string): number {
    const intA: number = getNum(fieldA);
    const intB: number = getNum(fieldB);

    if (intA < intB) return -1;
    if (intB < intA) return 1;
    return 0;
}

function getNum(str: string): number {
    return parseInt(/field(\d+)/.exec(str)[1], 10);
}


export default ProficiencyBySchool;
