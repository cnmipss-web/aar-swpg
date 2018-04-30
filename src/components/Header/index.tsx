import * as React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import Link from 'gatsby-link'
import axios, { AxiosResponse } from 'axios';

import { heights, dimensions, colors } from '../../styles/variables';
import { onEvent } from '../../styles/mixins';
import { Container, Row, Column } from '../Grid';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  ${onEvent`
    text-decoration: none;
  `}
`

interface HeaderProps {
  title: string
}

interface Nav {
    id: number,
    name: string,
}

interface WPPage {
    link: string,
}

class Header extends React.Component<HeaderProps> {

    private domain = 'http://localhost:80';

    constructor(props) {
        super(props);
        this.fetchHeaderContent = this.fetchHeaderContent.bind(this);
        this.getPages = this.getPages.bind(this);
    }

    public componentDidMount() {
        this.fetchHeaderContent();
    }

    public render () {
        const { title } = this.props;
        console.log('State', this.state);
        return (
            <StyledHeader>
                <HeaderInner>
                    <HomepageLink to="/" href="/">{title}</HomepageLink>
                </HeaderInner>
            </StyledHeader>
        );
    }

    private async fetchHeaderContent() {
        const navSections: AxiosResponse<Nav[]> = await axios.get(`${this.domain}/wp-json/wp/v2/nav/`);

        const headerLinks = await Promise.all(
            navSections.data.map(this.getPages)
        );

        this.setState({headerLinks});
    }

    private async getPages(navSection: Nav) {
        const pages: AxiosResponse<WPPage[]> = await axios.get(
            `${this.domain}/wp-json/wp/v2/pages/?nav=${navSection.id}&status=publish&per_page=100`
        );

        return {
            navSection,
            pages: pages.data
        };
    }
}

export default Header
