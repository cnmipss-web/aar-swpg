import * as React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;


export const Column = styled.div`
    width: ${calcColumnWidth};
`;


function calcColumnWidth({ width }): string {
    const calculatedWidth = width * 100 / 12;
    return `${calculatedWidth}%`;
}
