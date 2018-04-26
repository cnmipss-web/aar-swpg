import * as React from 'react'
const uuidv4 = require('uuid/v4');

export default ({ data, section, children }) => (
    <section>
        <div dangerouslySetInnerHTML={{__html: getMarkDownContent(data, section) }} />
        {children}
    </section>
);

function getMarkDownContent(data, section) {
    return data.allMarkdownRemark.edges
        .filter(({node}) => node.frontmatter.title === section)
        .map(({node}) => node.html)[0]
}
