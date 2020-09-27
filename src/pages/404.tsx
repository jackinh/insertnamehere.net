import React from "react"
import styled from "@emotion/styled"

import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
`

const Body = styled.div`
  max-width: 400px;
`

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <Body>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Body>
  </Container>
)

export default NotFoundPage
