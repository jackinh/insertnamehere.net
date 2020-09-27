declare namespace SeoComponent {
  interface Data {
    description: string;
    lang: string;
    meta: [{
      content: string;
      property: string;
      name?: undefined;
    } | {
      content: string;
      name: string;
      property?: undefined;
    }];
    title: string;
  }

  interface StaticQuery {
    site: {
      siteMetadata: {
        author: string;
        description: string;
        title: string;
      }
    }
  }
}