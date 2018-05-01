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
        const { navs, selected } = this.props;
        const matchingNavs = navs.filter(headerLinks =>
            headerLinks.navSection.name === selected
        );
        return (
            <NavItem>
                <StyledDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                >
                    <DropdownToggle
                        tag="a"
                        onClick={this.toggle}
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={this.state.dropdownOpen}
                    >
                        <span dangerouslySetInnerHTML={{__html: selected}} />
                    </DropdownToggle>
                    &nbsp;
                    <i className="fa fa-caret-down" />
                    <DropdownMenu>
                        {matchingNavs.length > 0 ? matchingNavs[0].pages.map(this.pageLink) : ''}
                    </DropdownMenu>
                </StyledDropdown>
            </NavItem>
        );
    }

    private toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
          });
    }

    private pageLink(page) {
        return (
            <DropdownItem tag="li" key={uuidv4()}>
                <a
                    href={page.link}
                    dangerouslySetInnerHTML={{__html: page.title.rendered}}
                />
            </DropdownItem>
        );
    }
}

export default DropdownComponent;
