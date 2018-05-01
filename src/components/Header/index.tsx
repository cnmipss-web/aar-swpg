import * as React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import Link from 'gatsby-link'
import axios, { AxiosResponse } from 'axios';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { heights, dimensions, colors, breakpoints } from '../../styles/variables';
import { onEvent, media } from '../../styles/mixins';

import Dropdown from './Dropdown';
import Banner from './Banner';
import SearchForm from './Search';

const StyledHeader = styled.header`
`;

const StyledNavbar = styled(Navbar)`
    background-color: ${colors.blue};
    border-radius: 0px;
    border-top: solid 5px ${colors.gold.light};
    color: ${colors.white};
    display: flex;
    font-size: 1rem;
    justify-content: center;
    margin-bottom: 0px;
    min-height: ${heights.navBar}px;
    padding: 5px;
    width: auto;
    height: auto;
    z-index: 100;
`;

const StyledNavbarToggler = styled(NavbarToggler)`
    background-color: ${colors.gold.normal};
    color: ${colors.blue};
    margin-top: 0px;
    margin-bottom: 5px;
    padding: 5px;
    width: 34px;
    height: 34px;

    @media screen and (min-width: ${breakpoints.md}px) {
        display: none;
    }
`;

const StyledCollapse = styled(Collapse)`
    @media screen and (min-width: ${breakpoints.md}px) {
        display: inherit !important;
    }
`;

const NavLinks = styled(Nav)`
    align-content: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin: 0px;
    padding: 0px;
    width: 100%;

    a {
        color: white;
        cursor: pointer;

        &:hover {
            background-color: inherit;
            text-decoration: underline !important;
        }
    }

    li {
        &:hover {
            background-color: inherit;
        }
        div {
            background-color: ${colors.blue};
            color: white;
        }
    }

    @media screen and (max-width: ${breakpoints.md}px) {
        flex-direction: column;
    }
`;

const NavbarHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    margin: 0px auto;
    padding-top: 5px;
    width: 100%;

    ${media.md`
        display: none;
    `}

    hr {
        background-color: #555;
        width: 100%;
    }
`;



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

interface HeaderLinks {
    navSection: Nav,
    pages: WPPage[]
}

interface HeaderState {
    headerLinks: HeaderLinks[],
    isOpen: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {

    private domain = 'http://localhost:80';


    constructor(props) {
        super(props);
        this.fetchHeaderContent = this.fetchHeaderContent.bind(this);
        this.getPages = this.getPages.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            headerLinks: [],
            isOpen: true
        }
    }

    public componentDidMount() {
        this.fetchHeaderContent();
    }

    public render () {
        const { title } = this.props;
        const { headerLinks } = this.state;
        console.log('State', this.state);
        return (
            <StyledHeader>
                <Banner searchAction={`${this.domain}/`}/>

                <StyledNavbar
                    className="container-fluid"
                >
                    <NavbarHeader>
                        <SearchForm
                            action={`${this.domain}/`}
                            location="nav"
                        />
                        <StyledNavbarToggler
                            onClick={this.toggle}
                        >
                            <span className="sr-only">
                                Toggle navigation
                            </span>
                            <i className="fa fa-bars" aria-hidden="true" />
                        </StyledNavbarToggler>
                    </NavbarHeader>
                    <StyledCollapse
                        className="col-12 col-lg-10"
                        isOpen={this.state.isOpen}
                        navbar
                    >
                        <NavLinks
                            role="menu"
                            navbar
                        >
                            <NavItem>
                                <a href="/news"> PSS News </a>
                            </NavItem>
                            <Dropdown
                                navs={headerLinks}
                                selected={'Students &amp; Parents'}
                            />
                            <Dropdown
                                navs={headerLinks}
                                selected="Employees"
                            />
                            <Dropdown
                                navs={headerLinks}
                                selected="Community"
                            />
                            <Dropdown
                                navs={headerLinks}
                                selected="District Information"
                            />
                            <Dropdown
                                navs={headerLinks}
                                selected="Public Reports"
                            />
                            {/* <?php cnmi_header_dropdown('Students & Parents'); ?> */}
                            {/* <?php cnmi_header_dropdown('Employees'); ?> */}
                            {/* <?php cnmi_header_dropdown('Community'); ?> */}
                            {/* <?php cnmi_header_dropdown('District Information'); ?> */}
                            {/* <?php cnmi_header_dropdown('Public Reports'); ?> */}
                        </NavLinks>
                    </StyledCollapse>
                </StyledNavbar>
            </StyledHeader>
        );
    }

    private toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
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
