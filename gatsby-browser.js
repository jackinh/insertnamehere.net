/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/global.css'
import WrapWithRealmProvider from './wrap-with-realm-provider'

export const wrapRootElement = WrapWithRealmProvider;

