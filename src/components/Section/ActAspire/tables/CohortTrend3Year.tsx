import * as React from 'react'
const uuidv4 = require('uuid/v4');

import {
    tableHeaders,
    tableDataRow,
    RowHeader,
    StyledTable
} from '../../../AccessibleTable';

import { SchoolSubject } from '../constants';

declare interface Props {
    subject: SchoolSubject,
    data: any,
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

const CohortTrendTable: React.SFC<Props> = ({data, subject}) => {
    const dataField = `allAa${subject}Cohort3YrCsv`;
    const { [dataField]: { edges } } = data;
    const [ headers, ...rows ]: Edge[] = edges;
    return (
        <StyledTable>
            <caption>
                Three Year Cohort Trend: Students Meeting Exceeding or Ready Benchmarks for {subject}
            </caption>
            <thead>
                {tableHeaders(headers)}
            </thead>
            <tbody>
                {rows.map(tableDataRow())}
            </tbody>
        </StyledTable>
    );
}

export default CohortTrendTable;
