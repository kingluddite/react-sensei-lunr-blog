---
title: Why CORS issue with MERN App?
date: "2020-07-04T23:46:37.121Z"
description: Explanation and solution for why you get the CORS issue when building a MERN app
---

## CORS issue with MERN Solution
* If you have a MERN app and you get the CORS error in the browser here is the solution

## Solution: Add a client proxy
* A nice convenient feature for development

## Where to add the proxy?
* In package.json of the client (your react folder)
  - Remember you have two package.json files in a MERN app, the server package.json and the client
      + You are placing the proxy in the `client` folder
  - When you set up this proxy it will proxy all unknown requests to our backend (and this is what will happen during development)

## Why do we need to do this?
* If I have a fetch to `/api/something` during development if I don't set up this proxy I'll have to preface every server route with `http://localhost:5000`
* `http://localhost:5000/api/something` (this is what it would look like)
* Setting up the proxy saves us having to always type that
    + This also avoids CORS issues (because we have two different domains)
      - CORS is a security feature

## Why do you get the CORS error?
* Because our backend is on port `5000` but our frontend is on port `3000` by default using the create react app
  - Because of this the browser thinks you are making two requests from two different domains and that's why you get that CORS error
  - By setting up this proxy issue you avoid setting up these two issues
