import * as React from 'react'
import styled from 'styled-components';
import {lighten} from 'polished';
const uuidv4 = require('uuid/v4');

import { colors } from '../styles/variables';

export const StyledTable = styled.table`

    caption {
        caption-side: top;
        text-align: center;
        font-family: serif;
        font-size: 1rem;
        font-weight: 500;
        color: inherit;
    }

    th[scope="col"] {
        font-family: sans-serif;
        text-align: center;
    }

    td {
        font-family: serif;
        text-align: center;
    }

    tr {
        border: 1px solid #ccc;

        &:nth-of-type(odd) {
            background-color: white;
        }

        &:nth-of-type(even) {
            background-color: ${lighten(0.35)(colors.gold.light)};
        }
    }
`;

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
    const fields = Object.keys(row).sort(fieldSort);
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
        const fields = Object.keys(row).sort(fieldSort);
        return <tr key={uuidv4()}>{fields.map(cellFn(row))}</tr>;
    }
}

function defaultCellFn(rowData) {
    return (field: string, i: number) => (
        <td key={uuidv4()}>{rowData[field]}</td>
    );
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
