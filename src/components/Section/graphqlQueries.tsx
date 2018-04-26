export const actAspireQuery = graphql`
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

export const NMCPlacementQuery = graphql`
    fragment NMCPlacementData on RootQueryType {
        allNmcMath2017Csv {
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

        allNmcReading2017Csv {
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

        allNmcWriting2017Csv {
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
