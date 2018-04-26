import * as React from 'react'
const uuidv4 = require('uuid/v4');

import Page from '../components/Page'
import Container from '../components/Container'
import ActAspireResults from '../components/sections/ActAspire';


export default ({data, context}) => (
  <Page>
    <Container>
        <ActAspireResults data={data}/>
    </Container>
  </Page>
)

export const query = graphql`
    query IndexQuery {
        ...actAspireData

        markdownRemark(frontmatter: { title: { eq: "ActAspire" }}) {
            html
        }
    }
`
