import React from 'react'
import { graphql } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostPreview from '../components/post-preview'

const searchClient = algoliasearch(
  '9MUIQF3OH7',
  'adcdb9952d9c7ab0fadff168ed16364b'
)

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <InstantSearch searchClient={searchClient} indexName="Blog">
          <SearchBox translations={{ placeholder: 'Search for Web Stuff' }} />
          <Hits hitComponent={PostPreview} />
        </InstantSearch>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
