import * as React from 'react';
import styled from 'styled-components';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import { GraphQLQuery } from '../../../typings';

declare interface NoticeProps {
    data: GraphQLQuery.IndexQueryResult
}


export default (props: NoticeProps): JSX.Element => (
    <Row>
        <Col xs="12" sm={{size: 10, offset: 1}}>
            <div
                dangerouslySetInnerHTML={{
                    __html: getMarkdownHTML(props.data)
                }}
            />
        </Col>
    </Row>
);

function getMarkdownHTML(data: GraphQLQuery.IndexQueryResult): string {
    return data.allMarkdownRemark.edges
        .filter(({node}) => node.frontmatter.title === 'AccessibilityNotice')
        .map(({node}) => node.html)[0];
}
