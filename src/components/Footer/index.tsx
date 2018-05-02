import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import { colors } from '../../styles/variables';

const Footer = styled.footer`
    background-color: ${colors.blue};
    border-top: solid 5px ${colors.gold.light};
    color: white;


    h2 {
        font-size: 1.2rem;
        margin-top: 5px;
        margin-bottom: 0px;
        text-align: center;
        font-weight: 400;
        color: ${colors.gold.light};
    }

    p {
        font-size: 0.90rem;
        white-space: nowrap;
    }

    a {
        color: ${colors.gold.light};
    }

    width: 100%;
    .site-info {
        padding: 5px;
    }
    p {
        margin: 10px;
    }

    .site-info {
        background-color: ${colors.darkBlue};
        p {
            @include for-phone-only {
                font-size: 0.75rem;
            }
            white-space: normal;
        }
    }

    .footer-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

declare interface FooterState {
    districtOfficeContact: {
        acf: {
            address: string,
            email: string,
            fax: string,
            telephone: string
        }
    }
}

export default class FullFooter extends React.Component<any, FooterState> {

    private domain = 'http://localhost:80';

    constructor(props) {
        super(props);
        this.fetchContactInfo = this.fetchContactInfo.bind(this);

        this.state = {
            districtOfficeContact: {
                acf: {
                    address: null,
                    telephone: null,
                    email: null,
                    fax: null
                }
            }
        };
    }

    public componentDidMount() {
        this.fetchContactInfo();
    }

    public render() {
        const {
            districtOfficeContact: {
                acf: {address, email, fax, telephone}
            }
        } = this.state;
        return (
            <Footer id="colophon" className="site-footer" role="contentinfo">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h2>Contact District Office</h2>
                            <div className="footer-center">
                                {/* <?php
                                $contact = new WP_Query(array(
                                    'title' => 'District Office',
                                    'post_type' => 'contact_info',
                                ));
                                cnmi_contact_info($contact->posts[0]);

                                ?> */}
                                <p dangerouslySetInnerHTML={{__html: address}}/>
                                <p>
                                    {telephone ? `Tel: ${telephone}` : ''}
                                    {telephone ? <br /> : ''}

                                    {fax ? `Fax: ${fax}` : ''}
                                    {fax ? <br /> : ''}

                                    {email ? `Email: ${fax}` : ''}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="site-info container-fluid">
                    <Container>
                        <Row>
                            <Col xs="6" md="7" lg="8">
                                <p>
                                    Copyright © 2018 CNMI PSS
                                </p>
                            </Col>
                            <Col xs="6" md="5" lg="4">
                                <p>Contact Webmaster: webmaster@cnmipss.org</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Footer>
        );
    }

    private async fetchContactInfo() {
        const contactInfo = await axios.get(`${this.domain}/wp-json/wp/v2/contact_info/?search=district%20office&type=contact_info`);

        const districtOfficeContact = contactInfo.data.filter(post => post.type === 'contact_info')[0];

        this.setState({districtOfficeContact});
    }
}
