import React from 'react'

const SearchResults = ({ query, results }) => (
  <section aria-label="Search results for all posts">
    {!!results.length && query && (
      <h2 className="search-results-count" aria-live="assertive">
        Found {results.length} posts on &quot;{query}&quot;
      </h2>
    )}
    {!!results.length && (
      <ol className="search-results=list">
        {results.map(({ title, url, date, description }) => (
          <li key={title}>
            <h3 className="search-results-list__heading">
              <a href={url} className="search-results-list__link">
                {title}
              </a>
            </h3>
            <small>{new Date(date).toLocaleString('en-GB')}</small>
            {description && <p>{description}</p>}
          </li>
        ))}
      </ol>
    )}
  </section>
)

export default SearchResults
