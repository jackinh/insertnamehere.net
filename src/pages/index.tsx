import React from "react"
import { graphql, PageProps } from "gatsby"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import UserPanel from "../components/user-panel"

interface Data {
  contentfulLandingPage: {
    logo: {
      svg: {
        content: string;
      }
    }
  }
}

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Logo = styled.div`
  max-width: 400px;
  width: 100vw;
`

interface IndexPageProps extends PageProps {
  data: Data;
}

const IndexPage = (props : IndexPageProps) => {
  return (
    <>
      <SEO title="home" />
      <UserPanel />
      <CenteredContainer>
        <Logo dangerouslySetInnerHTML={{ __html: props.data.contentfulLandingPage.logo.svg.content }} />
      </CenteredContainer>
    </>
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
