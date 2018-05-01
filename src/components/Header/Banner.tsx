import * as React from 'react';
import styled from 'styled-components';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import SearchForm from './Search';

import { colors } from '../../styles/variables';
import { media } from '../../styles/mixins';

const headerImage = 'http://www.cnmipss.org/wp-content/uploads/2015/04/PSSMainBanner.jpg';

const StyledImg = styled.img`
    width: 100%;
    height: auto;
    min-height: 75px;
    min-width: 400px;
`;

const StyledText = styled.p`
    color: ${colors.gray.dark};
    font-weight: 500;
    text-align: center;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;

    br {
        display: none;
        ${media.md`
            display: block;
        `}
    }
`;

declare interface BannerProps {
    searchAction: string
}

const BannerComponent: React.SFC<BannerProps> = (props) => (
    <Container>
        <Row>
            <Col xs="12" lg="6">
                <a href="/">
                    <p className="sr-only">CNMI PSS District Website</p>
                    <StyledImg src={headerImage} alt="" />
                </a>
            </Col>
            <Col xs="12" md="6" lg="2">
                <StyledText>
                Questions? <br />
                Call 670-237-3061
                </StyledText>
            </Col>
            <Col xs="0" md="6" lg="4">
                <SearchForm
                    location="header"
                    action={props.searchAction}
                />
            </Col>
        </Row>
    </Container>
);

export default BannerComponent;
