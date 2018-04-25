import * as React from 'react'
import Link from 'gatsby-link'
const uuidv4 = require('uuid/v4');

declare interface Props {
    subject: SchoolSubject,
    data: any,
    key: any
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

const SubjectOverallTable: React.SFC<Props> = ({data, subject}) => {
    console.log(data);
    const dataField = `allAa${subject}OverallCsv`;
    const { [dataField]: { edges } } = data;
    const [ headers, ...rows ] = edges;
    return (
        <table>
            <caption>
                Act Aspire Overall Results for {subject}
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

export default SubjectOverallTable;

export const query = graphql`
    fragment csvData on RootQueryType {
        allAaMathOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaEnglishOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaReadingOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaScienceOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaWritingOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }
    }
`;
