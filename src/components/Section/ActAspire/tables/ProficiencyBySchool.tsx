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
    const tableId = uuidv4();

    return (
        <StyledTable>
            <caption>
                Act Aspire Results for {subject} by School for Grade {grade}
            </caption>
            <tbody>
                {tableHeaders(tableId)(firstHeaders, secondHeaders)}
                {edges.reduce(subjectReducerFn(subject), [])
                    .slice(2)
                    .map(tableDataRow(dataCellFn(tableId)))}
            </tbody>
        </StyledTable>
    );
}

function tableHeaders(tableId: string) {
    return (firstHeaders: Edge, secondHeaders: Edge): JSX.Element[] => {
        const { node: firstRow } = firstHeaders;
        const { node: secondRow } = secondHeaders;
        const firstRowFields = Object.keys(firstRow).sort(fieldSort);
        const secondRowFields = Object.keys(secondRow).sort(fieldSort);

        return [
            (
                <tr>
                    <th id={`first-col-${tableId}`}scope="col" rowSpan={2}>Achievement Level</th>
                    {firstRowFields.slice(1)
                        .filter(field => (firstRow[field].length > 0))
                        .map((field, i: number) => (
                            <th
                                id={`${i}-header1-${tableId}`}
                                scope="colgroup"
                                colSpan={2}
                            >
                                {firstRow[field]}
                            </th>
                    ))}
                </tr>
            ),
            (
                <tr>
                    {secondRowFields.slice(1)
                        .map((field, i) => (
                            <th
                                id={`${i}-header2-${tableId}`}
                                scope="col"
                            >
                                {secondRow[field]}
                            </th>
                        ))}
                </tr>
            )
        ];
    }
}

function dataCellFn(tableId: string) {
    return (rowData: Node, rowNum: number) => {
        return (field: string, i: number) => {
            const rowHeader = `${rowNum}-rowheader-${tableId}`;
            const data = rowData[field];
            if ( i === 0) {
            return (
                <RowHeader
                    id={rowHeader}
                    headers={`first-col-${tableId}`}
                    key={uuidv4()}
                >
                    {data}
                </RowHeader>
            );
            } else {
                const firstHeader =  `${Math.floor((i - 1) / 2)}-header1-${tableId}`;
                const secondHeader = `${i - 1}-header2-${tableId}`;
                return (
                    <td
                        headers={`${firstHeader} ${secondHeader} ${rowHeader}`}
                        key={uuidv4()}
                    >
                        {data}
                    </td>
                );
            }
        }
    }
}

function subjectReducerFn(subject: string) {
    const re = new RegExp(subject, 'i');
    let found = false;
    let startIndex = 0;
    return (table, line: Edge, index) => {
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
