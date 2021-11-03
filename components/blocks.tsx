import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Layout } from './blocks/layout';

export const Blocks = (props: Pages) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksContent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Content data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksLayout":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <Layout data={block} />
                    </React.Fragment>
                  )
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
