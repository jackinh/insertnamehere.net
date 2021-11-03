import { getStaticPropsForTina, staticRequest, gql } from "tinacms";
import { GetStaticPaths, GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { Blocks } from "../components/blocks";
import type { Query } from "../.tina/__generated__/types";
import { ParsedUrlQuery } from "querystring";

interface HomePageProps {
  data: Pick<Query, "getPagesDocument">
}

interface StaticPropsParams extends ParsedUrlQuery {
  filename: string;
}

export default function HomePage(props: HomePageProps) {
  return <Blocks {...props.data.getPagesDocument.data} />;
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<StaticPropsParams>) => {
  const tinaProps = (await getStaticPropsForTina({
    query: gql`
      query ContentQuery($relativePath: String!) {
        # "index.md" is _relative_ to the "Pages" path property in your schema definition
        # you can inspect this file at "content/pages/index.md"
        getPagesDocument(relativePath: $relativePath) {
          data {
            __typename
            blocks {
              __typename
              ... on PagesBlocksContent {
                body
                color
              }
              ... on PagesBlocksLayout {
                header {
                  nav {
                    __typename
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: { relativePath: `${params.filename}.md` },
  })) as HomePageProps;

  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesListData = (await staticRequest({
    query: gql`
      {
        getPagesList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })) as Pick<Query, "getPagesList">;

  const result: GetStaticPathsResult<StaticPropsParams> = {
    paths: pagesListData.getPagesList.edges.map((page) => ({
      params: { filename: page.node.sys.filename },
    })),
    fallback: false,
  }

  return result;
};
