import * as React from 'react'
const uuidv4 = require('uuid/v4');

import ProficiencyByGradeTable from './tables/ProficiencyByGrade';
import CohortTrendTable from './tables/CohortTrend3Year';

import { subjectList } from './constants';

export default ({ data }) => (
    <div>
        <h3>Overall Results</h3>
        {subjectList.map(subject =>
            <div key={uuidv4()}>
                <h4>
                    Act Aspire Summative Results: {subject} Proficiency by Grade
                </h4>
                <ProficiencyByGradeTable type="Overall" data={data} subject={subject} />
                <CohortTrendTable data={data} subject={subject} />
            </div>
        )}
    </div>
);
