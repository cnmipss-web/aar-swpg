import * as React from 'react'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css';
import '../styles/normalize';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface WrapperProps {
  children: () => any
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteDomain: string
      }
    }
  }
}

const IndexLayout: React.SFC<WrapperProps> = ({ children, data }) => (
  <LayoutRoot>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: 'academic, achievement, act, aspire' }
      ]}
    />
    <Header
        title={data.site.siteMetadata.title}
        domain={data.site.siteMetadata.siteDomain} />
    <LayoutMain>
      {children()}
    </LayoutMain>
    <Footer domain={data.site.siteMetadata.siteDomain} />
  </LayoutRoot>
)

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        siteDomain
      }
    }
  }
`
