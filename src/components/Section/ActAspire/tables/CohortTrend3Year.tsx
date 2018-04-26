import * as React from 'react'
import Link from 'gatsby-link'
const uuidv4 = require('uuid/v4');

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
    console.log(data);
    const dataField = `allAa${subject}Cohort3YrCsv`;
    const { [dataField]: { edges } } = data;
    const [ headers, ...rows ] = edges;
    return (
        <table>
            <caption>
                Three Year Cohort Trend: Students Meeting Exceeding or Ready Benchmarks for {subject}
            </caption>
            <thead>
                <tr>
                    {Object.keys((headers.node)).map(key => {
                        return <th scope="col" key={uuidv4()}>{headers.node[key]}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map(({ node: row}) => {
                    return (
                    <tr key={uuidv4()}>
                        {Object.keys(row).map(key => {
                            return <td key={uuidv4()}>
                                {row[key]}
                            </td>
                        })}
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default CohortTrendTable;
