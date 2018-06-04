import * as React from 'react'
import styled from 'styled-components'
import {
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
const uuidv4 = require('uuid/v4');

interface DropdownProps {
    navs: Array<{
        navSection: any,
        pages: any[]
    }>,
    selected: string
}

interface DropdownState {
    dropdownOpen: boolean
}

const StyledDropdown = styled(Dropdown)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 200px;
    align-items: center;

    a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        i {
            padding-left: 10px;
        }
    }
`;

class DropdownComponent extends React.Component<DropdownProps, DropdownState> {

    constructor(props) {
        super(props);
        this.pageLink = this.pageLink.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownOpen: false
        };

    }

    public render() {
        const { selected, navs } = this.props;
        const { dropdownOpen } = this.state;

        const matchingNavs = navs.filter(headerLinks =>
            headerLinks.navSection.name === selected
        ).map(({navSection, pages }) => ({
            navSection,
            pages: pages.sort(this.sortNavLinks)
        }));

        return matchingNavs.length > 0 ? (
            <NavItem>
                <StyledDropdown
                    isOpen={dropdownOpen}
                    toggle={this.toggle}
                >
                    <DropdownToggle
                        tag="a"
                        onClick={this.toggle}
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup={true}
                        aria-expanded={dropdownOpen}
                    >
                        <span dangerouslySetInnerHTML={{__html: selected}} />
                        <i className="fa fa-caret-down" />
                    </DropdownToggle>
                    <DropdownMenu tag="ul">
                        {matchingNavs[0].pages.map(this.pageLink)}
                    </DropdownMenu>
                </StyledDropdown>
            </NavItem>
        ) : (<div />);
    }

    private sortNavLinks(linkA, linkB): number {
        if (linkA.menu_order < linkB.menu_order) {
            return 1;
        } else if (linkA.menu_order > linkB.menu_order) {
            return -1
        } else {
            return 0;
        }
    }

    private toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
          });
    }

    private pageLink(page) {
        return (
            <li className="dropdown-item" key={uuidv4()}>
                <a
                    href={page.link}
                    dangerouslySetInnerHTML={{__html: page.title.rendered}}
                />
            </li>
        );
    }
}

export default DropdownComponent;
