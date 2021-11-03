import React from "react";
import Markdown from "react-markdown";
import { Container } from "../container";
import { Section } from "../section";
import type { PagesBlocksContent } from '../../.tina/__generated__/types';

export const Content = ({ data }: { data: PagesBlocksContent}) => {
  return (
    <Section color={data.color}>
      <Container
        className={`max-w-4xl prose prose-lg ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        size="large"
      >
        <Markdown>{data.body}</Markdown>
      </Container>
    </Section>
  );
};
