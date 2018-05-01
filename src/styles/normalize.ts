import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { dimensions, fonts, colors } from './variables'
import { onEvent, media } from './mixins'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${styledNormalize}

  // Set up a decent box model on the root element
  html {
    box-sizing: border-box;
  }

  // Make all elements from the DOM inherit from the parent box-sizing
  // Since '*' has a specificity of 0, it does not override the 'html value
  // making all elements inheriting from the root box-sizing value
  // See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.gray.text};
    background-color: ${colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  // Set defaults for links
  a {
    color: ${colors.brand};
    text-decoration: none;

    ${onEvent`
      text-decoration: underline;
    `}
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  // Figure elements
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0rem;
    color: ${colors.gray.text};
    font-weight: 600;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;

    strong, em {
        font-size: inherit;
        font-weight: inherit;
    }

    em {
        font-style: italic;
    }
}

  h1 {
    color: ${colors.darkBlue};
    font-size: ${dimensions.headings.sizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headings.sizes.h2}rem;
    padding-left: 1rem;
  }

  h3 {
    font-size: ${dimensions.headings.sizes.h3}rem;
    padding-left: 2rem;
  }

  h4 {
    font-size: ${dimensions.headings.sizes.h4}rem;
    padding-left: 3rem;
  }

  h5 {
    font-size: ${dimensions.headings.sizes.h5}rem;
    padding-left: 4rem;
  }

  h6 {
    font-size: ${dimensions.headings.sizes.h6}rem;
    padding-left: 5rem;
  }

  p {
    font-family: serif;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: $color-heading;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
      margin-bottom: 1rem;
      font-family: serif;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.ui.light};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    ${media.md`
      padding-right: 5rem;
      padding-left: 1.25rem;
    `}
  }
`
