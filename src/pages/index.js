import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SearchForm from '../components/searchForm'
import SearchResults from '../components/searchResults'

const BlogIndex = ({ data, location, query }) => {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get('keywords') || ''
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    if (window.__LUNR__) {
      if (searchQuery && window.__LUNR__) {
        window.__LUNR__.__loaded.then(lunr => {
          const refs = lunr.en.index.search(searchQuery)
          const posts = refs.map(({ ref }) => lunr.en.store[ref])
          setResults(posts)
        })
      }
    }
  }, [location.search])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <SearchForm query={searchQuery} />
      <SearchResults query={query} results={results} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
        }
      }
    }
  }
`
