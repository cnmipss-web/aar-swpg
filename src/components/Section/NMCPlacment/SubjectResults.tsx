import * as React from 'react'
const uuidv4 = require('uuid/v4');

import NMCPlacementResultsTable from './tables/NMCPlacementResultsTable';


export default ({ data, subject, year }) => (
    <div>
        <h4>NMC Placement Test Results: {subject}</h4>
        <NMCPlacementResultsTable data={data} subject={subject} year={year} />
    </div>
);
