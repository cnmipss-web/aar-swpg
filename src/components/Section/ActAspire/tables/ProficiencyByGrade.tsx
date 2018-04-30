import * as React from 'react'
import Link from 'gatsby-link'
const uuidv4 = require('uuid/v4');

import {
    tableHeaders,
    tableDataRow,
    RowHeader
} from '../../../AccessibleTable';

import { SchoolSubject } from '../constants';

declare interface Props {
    subject: SchoolSubject,
    data: any,
    type: 'Overall' | 'Iep' | 'Ell',
}

declare interface Edge {
    node: Node
}

declare interface Node {
    field1: string,
    field2: string,
    field3: string,
    field4: string,
    field5: string,
    field6: string,
    field7: string,
    field8: string,
    field9: string
}

const SubjectOverallTable: React.SFC<Props> = ({data, subject, type}) => {
    const dataField = `allAa${subject}${type}Csv`;
    const { [dataField]: { edges } } = data;
    const [ headers, ...rows ]: Edge[] = edges;
    return (
        <table>
            <caption>
                Act Aspire Overall Results for {subject}
            </caption>
            <thead>
                {tableHeaders(headers)}
            </thead>
            <tbody>
                {rows.map(tableDataRow(dataCellFn))}
            </tbody>
        </table>
    );
}

function dataCellFn(rowData: Node) {
    return (field: string, i: number) => {
        const data = rowData[field];
        if ( i === 0) {
            return <RowHeader>{data}</RowHeader>;
        } else {
            return <td key={uuidv4()}>{data}</td>;
        }
    }
}


export default SubjectOverallTable;
