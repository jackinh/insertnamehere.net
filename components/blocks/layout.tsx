import React from 'react';
import { PagesBlocksLayout } from '../../.tina/__generated__/types';

// TODO: This should be made to take children as well
export const Layout = ({ data }: { data: PagesBlocksLayout }) => {
  return (
    <>
      <h2>Nav:</h2>
      <ul>
      {
        // BUG: This works, but __typename can be undefined when using livePageProps from Tina (not sure why tho cause the other __typename data is there for the parent data)
        data.header.nav.map(({ slug, __typename }, i) => {
          console.log(__typename);
          return (
            <li key={i + __typename}>{slug}</li>
          );
        })
      }
      </ul>
    </>
  )
};

/*
global: index.json
{
  "header": {
    "icon": {
      "color": "orange",
      "style": "float",
      "name": "tina"
    },
    "color": "default",
    "nav": [
      {
        "href": "",
        "label": "Home"
      },
      {
        "href": "about",
        "label": "About"
      },
      {
        "href": "posts",
        "label": "Blog"
      }
    ]
  },
  "footer": {
    "color": "default",
    "social": {
      "facebook": "/",
      "twitter": "/",
      "instagram": "/"
    }
  },
  "theme": {
    "color": "blue",
    "font": "sans",
    "icon": "boxicon",
    "darkMode": "system"
  }
}
*/