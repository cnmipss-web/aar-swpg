import * as React from 'react'
import Link from 'gatsby-link'
const uuidv4 = require('uuid/v4');

import Page from '../components/Page'
import Container from '../components/Container'
import SubjectOverallTable from '../components/tables/actaspire/SubjectOverall';

const subjectList: SchoolSubject[] = [
    'English',
    'Math',
    'Writing',
    'Reading',
    'Science'
];

export default ({data, context}) => (
  <Page>
    <Container>
        {subjectList.map(subject =>
            <SubjectOverallTable key={uuidv4()} data={data} subject={subject} />
        )}
    </Container>
  </Page>
)

export const query = graphql`
    query IndexQuery {
        ...csvData
    }
`
