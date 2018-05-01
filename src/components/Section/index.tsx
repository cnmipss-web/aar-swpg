import * as React from 'react'
const uuidv4 = require('uuid/v4');

declare interface MarkdownNode {
    frontmatter: {
        title: string
    }
    html: string
}

declare interface MarkdownEdge {
    node: MarkdownNode
}

declare interface SectionData {
    allMarkdownRemark: {
        edges: MarkdownEdge[]
    }
}

declare interface SectionProps {
    data: SectionData
    section: string
}

const Section: React.SFC<SectionProps> = ({ data, section, children }) => (
    <section>
        <div dangerouslySetInnerHTML={{__html: getMarkDownContent(data, section) }} />
        {children}
    </section>
);

export default Section;

function getMarkDownContent(data: SectionData, section: string): string {
    return data.allMarkdownRemark.edges
        .filter(({node}) => node.frontmatter.title === section)
        .map(({node}) => node.html)[0]
}
