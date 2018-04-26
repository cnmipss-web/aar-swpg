import * as React from 'react'
const uuidv4 = require('uuid/v4');

import ProficiencyByGradeTable from './tables/ProficiencyByGrade';
import CohortTrendTable from './tables/CohortTrend3Year';

import { subjectList } from './constants';

export default ({ data }) => (
    <div>
        <h4>Results for English Language Learners (ELLs)</h4>
        {subjectList.map(subject =>
            <div key={uuidv4()}>
                <h5>
                    Act Aspire Summative Results for ELL Subgroup: {subject} Proficiency by Grade
                </h5>
                <ProficiencyByGradeTable type="Iep" data={data} subject={subject} />
            </div>
        )}
    </div>
);
