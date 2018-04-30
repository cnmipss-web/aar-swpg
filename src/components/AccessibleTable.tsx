import * as React from 'react'
import Link from 'gatsby-link'
const uuidv4 = require('uuid/v4');

declare interface Edge {
    node: any
}

type CellFn = (rowData: any) => (field: string, i: number) => JSX.Element;

export const ColumnHeader = props => <th scope="col" {...props} />;
export const RowHeader = props => <th scope="row" {...props} />;

export const HeaderRow = row => (
    <tr>
        {row.map(props => <ColumnHeader key={uuidv4()} {...props}/>)}
    </tr>
);

/**
 * Takes a graphql edge representing the header row of a CSV file and returns a
 * JSX component containing the header row of a table.
 *
 * @export
 * @param {Edge} { node: row }
 * @returns {JSX.Element}
 */
export function tableHeaders({ node: row }: Edge): JSX.Element {
    const fields = Object.keys(row);
    return HeaderRow(fields.map(field => ({children: [row[field]]})));
}

/**
 *
 * @export
 * @param {CellFn} [cellFn=defaultCellFn]
 * @returns
 */
export function tableDataRow(cellFn = defaultCellFn) {
    return ({ node: row}: Edge) => {
        const fields = Object.keys(row);
        return <tr key={uuidv4()}>{fields.map(cellFn(row))}</tr>;
    }
}

function defaultCellFn(rowData) {
    return (field: string, i: number) => (
        <td key={uuidv4()}>{rowData[field]}</td>
    );
}
