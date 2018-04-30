import * as React from 'react'
import Link from 'gatsby-link'
const uuidv4 = require('uuid/v4');

import {
    tableHeaders,
    tableDataRow,
    RowHeader
} from '../../../AccessibleTable';

declare interface Props {
    subject: 'Writing' | 'Math' | 'Reading',
    data: {
        [key: string]: {
            edges: Edge[]
        }
    },
    year: number,
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

const SubjectOverallTable: React.SFC<Props> = ({data, subject, year}) => {
    const dataField = `allNmc${subject}${year}Csv`;
    const { [dataField]: { edges } } = data;
    const [ headers, ...rows ]: Edge[] = edges;
    const {node: {field2: cohort}} = rows.slice(-1)[0];
    const dataRows = rows.slice(0, rows.length - 2);
    return (
        <table>
            <caption>
                {year} {cohort} NMC Placement Test Results for {subject}
            </caption>
            <thead>
                {tableHeaders(headers)}
            </thead>
            <tbody>
                {dataRows.map(tableDataRow())}
            </tbody>
        </table>
    );
}

export default SubjectOverallTable;
