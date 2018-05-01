import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

import { Components } from '../../../typings';

import {
    Form,
    Button
} from 'reactstrap';
import { breakpoints, colors } from '../../styles/variables';
import { onEvent, media } from '../../styles/mixins';

declare interface SearchProps {
    location: string,
    action: string
}

const StyledBannerForm: Components.StyledForm = styled(Form)`
    align-items: center;
    display: none;
    flex-direction: row;
    flex-flow: inherit;
    height: 100%;

    ${media.md`
        display: flex;
    `}
`;

const StyledNavForm: Components.StyledForm = styled(Form)`
    height: 34px;
    ${media.md`display: none`}
`;

const StyledNavButton: Components.StyledButton = styled(Button)`
    background-color: ${colors.gold.normal};
    color: ${colors.darkBlue};
    margin-left: 5px;
    max-width: 75px;

    &:focus {
        outline: 1px solid red;
        border-color: ${colors.gold.normal};
    }
`;

const StyledBannerButton: Components.StyledButton = styled(StyledNavButton)`
    background-color: ${colors.blue};
    color: ${colors.gold.light};
`;

const StyledFormGroup = styled.div`
    margin-bottom: 0px;
`;

class SearchForm extends React.Component<SearchProps> {

    public render() {
        const { location, action } = this.props;
        const FormComponent = location === 'nav' ? StyledNavForm : StyledBannerForm;
        const ButtonComponent = location === 'nav' ? StyledNavButton : StyledBannerButton;
        return (
            <FormComponent
                role="search"
                method="get"
                id={`${location}-search-form`}
                action={action}
                inline
            >
                <StyledFormGroup className="form-group">
                    <label
                        htmlFor={`${location}-search`}
                        className="sr-only"
                    >
                        Search:
                    </label>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        id={`${location}-search`}
                        name="s"
                    />
                </StyledFormGroup>
                <ButtonComponent
                    className="form-control"
                    type="submit"
                    id={`${location}-search-submit`}
                >
                    Search
                </ButtonComponent>
            </FormComponent>
        );
    }
}

export default SearchForm;
