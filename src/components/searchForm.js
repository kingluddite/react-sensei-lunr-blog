import React from 'react'
import { navigate } from 'gatsby'

const SearchForm = ({ query }) => (
  <form role="search" method="GET">
    <label htmlFor="search-input">
      <h1>Search posts</h1>
      <input
        id="search-input"
        type="search"
        name="keywords"
        aria-controls="search-results-count"
        onChange={e =>
          navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
        }
        value={query}
      />
    </label>
    <button type="submit">Submit</button>
  </form>
)

export default SearchForm
