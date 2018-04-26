import * as React from 'react'
const uuidv4 = require('uuid/v4');

import '../components/Section/graphqlQueries';

import Page from '../components/Page'
import Container from '../components/Container'
import ResultsSection from '../components/Section';

import AAOverallResults from '../components/Section/ActAspire/OverallResults';
import AAIEPResults from '../components/Section/ActAspire/IEPResults';
import AAELLResults from '../components/Section/ActAspire/ELLResults';

import NMCSubjectResults from '../components/Section/NMCPlacment/SubjectResults';

export default ({data, context}) => (
  <Page>
    <Container>
        <h1>{data.site.siteMetadata.title}</h1>
        <ResultsSection section="ActAspire" data={data}>
            <AAOverallResults data={data} />
            <AAIEPResults data={data} />
        </ResultsSection>
        <ResultsSection section="SBA" data={data}>
            <div />
        </ResultsSection>
        <ResultsSection section="AlternateAssessment" data={data}>
            <div />
        </ResultsSection>
        <ResultsSection section="WIDA" data={data}>
            <div />
        </ResultsSection>
        <ResultsSection section="NMCPlacement" data={data}>
            <NMCSubjectResults data={data} subject="Reading" year={2017} />
            <NMCSubjectResults data={data} subject="Writing" year={2017} />
            <NMCSubjectResults data={data} subject="Math" year={2017} />
        </ResultsSection>
    </Container>
  </Page>
)

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
