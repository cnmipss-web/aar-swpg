'use strict';

const cssnext = require('postcss-cssnext');

const siteUrl = 'https://www.cnmipss.org/academic-achievement-reports/';

module.exports = {
    pathPrefix: '/academic-achievement-reports/2017',
    siteMetadata: {
        siteDomain: 'https://www.cnmipss.org',
        title: 'Academic Achievement Report SY 2016-2017',
        description: '',
        siteUrl,
        year: '2016-2017',
        pdfFile: 'https://www.cnmipss.org/cnmi-pss-academic-achievement-report_2016-2017/',
        author: {
            name: 'Tyler Collins',
            email: 'webmaster@cnmipss.org'
        }
    },
    plugins: [{
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content`
            }
        },
        {
            resolve: 'gatsby-transformer-csv',
            options: {
                trim: true,
                noheader: true
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [{
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1rem'
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1140,
                            quality: 90,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl,
            }
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-next',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
    ]
}
