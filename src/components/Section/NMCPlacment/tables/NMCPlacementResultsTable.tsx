import * as React from 'react'
import Link from 'gatsby-link'
const uuidv4 = require('uuid/v4');

declare interface Props {
    subject: 'Writing' | 'Math' | 'Reading',
    data: any,
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
    const [ headers, ...rows ] = edges;
    const {node: {field2: cohort}} = rows.slice(-1)[0];
    return (
        <table>
            <caption>
                {year} {cohort} NMC Placement Test Results for {subject}
            </caption>
            <thead>
                <tr>
                    {Object.keys((headers.node)).map(key => {
                        return <th scope="col" key={uuidv4()}>{headers.node[key]}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.slice(0, rows.length-2).map(({ node: row}) => {
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

export default SubjectOverallTable;
