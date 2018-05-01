import * as React from 'react';
import styled from 'styled-components';
const uuidv4 = require('uuid/v4');

import '../components/Section/graphqlQueries';

import { dimensions, colors } from '../styles/variables'

import Page from '../components/Page'
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import ResultsSection from '../components/Section';

import AAOverallResults from '../components/Section/ActAspire/OverallResults';
import AAIEPResults from '../components/Section/ActAspire/IEPResults';
import AAELLResults from '../components/Section/ActAspire/ELLResults';

import NMCSubjectResults from '../components/Section/NMCPlacment/SubjectResults';

const StyledContainer = styled(Container)`
    background-color: white;
    border-radius: 2px;
    box-shadow: inset 0px 0px 1px 2px #ccc;
    margin-bottom: 15px;
`;


export default ({data, context}) => (
    <Page>
        <StyledContainer>
            <Row>
                <Col>
                    <h1>{data.site.siteMetadata.title}</h1>
                    <ResultsSection
                        section="ActAspire"
                        data={data}
                    >
                        <AAOverallResults data={data} />
                        <AAIEPResults data={data} />
                    </ResultsSection>
                    <ResultsSection
                        section="SBA"
                        data={data}
                    >
                        <div />
                    </ResultsSection>
                    <ResultsSection
                        section="AlternateAssessment"
                        data={data}
                    >
                        <div />
                    </ResultsSection>
                    <ResultsSection
                        section="WIDA"
                        data={data}
                    >
                        <div />
                    </ResultsSection>
                    <ResultsSection
                        section="NMCPlacement"
                        data={data}
                    >
                        <NMCSubjectResults
                            subject="Reading"
                            year={2017}
                            data={data}
                        />
                        <NMCSubjectResults
                            subject="Writing"
                            year={2017}
                            data={data}
                        />
                        <NMCSubjectResults
                            subject="Math"
                            year={2017}
                            data={data}
                        />
                    </ResultsSection>
                </Col>
            </Row>
        </StyledContainer>
    </Page>
);

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }

        ...actAspireData
        ...NMCPlacementData

        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                }
                html
              }
            }
          }
    }
`;
