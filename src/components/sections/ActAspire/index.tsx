import * as React from 'react'
const uuidv4 = require('uuid/v4');

import OverallResults from './OverallResults';
import IEPResults from './IEPResults';
import ELLResults from './ELLResults';

export default ({ data }) => (
    <section>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <OverallResults data={data} />
        <IEPResults data={data} />
        <ELLResults data={data} />
    </section>
    );

export const query = graphql`
    fragment actAspireData on RootQueryType {
        allAaMathOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaMathCohort3YrCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                }
            }
        }

        allAaMathIepCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaEnglishOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaEnglishCohort3YrCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                }
            }
        }

        allAaEnglishIepCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaReadingOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaReadingCohort3YrCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                }
            }
        }

        allAaReadingIepCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaScienceOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaScienceCohort3YrCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                }
            }
        }

        allAaScienceIepCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaWritingOverallCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }

        allAaWritingCohort3YrCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                }
            }
        }

        allAaWritingIepCsv {
            edges {
                node {
                    field1
                    field2
                    field3
                    field4
                    field5
                    field6
                    field7
                    field8
                    field9
                }
            }
        }
    }
`;
