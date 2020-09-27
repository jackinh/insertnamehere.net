/// <reference path="index.d.ts" />

import React from "react"
import { graphql, PageProps } from "gatsby"
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
  width: 100vw;
`

export interface IndexPageProps extends PageProps {
  data: IndexPage.Data;
}

const IndexPage = (props : IndexPageProps) => {
  return (
    <Container>
      <SEO title="home" />
      <Logo dangerouslySetInnerHTML={{ __html: props.data.contentfulLandingPage.logo.svg.content }} />
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
