import * as React from 'react';
import styled from 'styled-components';
const uuidv4 = require('uuid/v4');

import ProficiencyByGradeTable from './tables/ProficiencyByGrade';
import ProficiencyBySchoolTable from './tables/ProficiencyBySchool';
import CohortTrendTable from './tables/CohortTrend3Year';

import { subjectList } from './constants';
import { Table } from 'reactstrap';

const grades = [3, 4, 5, 6, 7, 8, 9, 10];

export default ({ data }) => (
    <div>
        <h4>Overall Results</h4>
        {subjectList.map(subject =>
            <div key={uuidv4()}>
                <h5>
                    Act Aspire Summative Results: {subject} Proficiency by Grade and School
                </h5>
                <TableBox>
                    <ProficiencyByGradeTable type="Overall" data={data} subject={subject} />
                </TableBox>
                {
                    grades.map(grade =>
                        <TableBox key={uuidv4()} >
                            <ProficiencyBySchoolTable grade={grade} data={data} subject={subject} />
                        </TableBox>
                    )
                }
                <TableBox>
                    <CohortTrendTable data={data} subject={subject} />
                </TableBox>
            </div>
        )}
    </div>
);

const TableBox = styled.div`
    overflow: auto;
    margin-bottom: 15px;
`;
