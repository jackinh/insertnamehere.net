import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Logo = styled.div`
  max-width: 400px;
`

const IndexPage = ({data: query}) => {
  return (
    <Container>
      <SEO title="home" />
      <Logo dangerouslySetInnerHTML={{ __html: query.contentfulLandingPage.logo.svg.content }} />
    </Container>
  )
}

export const query = graphql`
query LandingPage {
  contentfulLandingPage {
    logo {
      svg {
        content
      }
    }
  }
}
`

export default IndexPage
