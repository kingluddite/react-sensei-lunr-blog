import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

const Search = ({ data, location, query }) => {
  const [results, setResults] = useState([])
  const searchQuery = new URLSearchParams(location.search).get('keywords') || ''

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
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SearchForm query={searchQuery} />
      <SearchResults query={query} results={results} />
    </Layout>
  )
}

export default Search

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
