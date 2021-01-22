/**
 * Implement Gatsby's Server Side Rendering APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import WrapWithRealmProvider from './wrap-with-realm-provider'

export const wrapRootElement = WrapWithRealmProvider;