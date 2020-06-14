import React, { useState, useEffect } from 'react';
import jobsData from '../../data/data.json';
import JobListing from './JobListing/JobListing';
import Filters from './Filters/Filters';

import './JobListings.scss';

function JobListings() {
    const [ jobs, setJobs ] = useState([]);
    const [ filters, setFilters ] = useState([]);

    useEffect(() => {
        const jobsWithFilters = jobsData.map((job) => {
            return { ...job, filters: [ job.role, job.level, ...job.languages, ...job.tools ] };
        });
        setJobs(jobsWithFilters);
    }, []);

    const addFilter = (language) => {
        if (!filters.includes(language)) {
            setFilters(filters.concat(language));
        }
    };

    const removeFilter = (language) => {
        setFilters(filters.filter((filter) => filter !== language));
    };

    const filterJobs = () => {
        const filteredJobs = jobs.filter((job) => filters.every((filter) => job.filters.includes(filter)));

        return filteredJobs;
    };

    const clearFilters = () => {
        setFilters([]);
    };

    return (
        <div className='job-listings'>
            {filters.length > 0 && <Filters filters={filters} remove={removeFilter} clearFilters={clearFilters} />}
            {filterJobs().map((job) => {
                return <JobListing click={addFilter} key={job.id} {...job} />;
            })}
        </div>
    );
}

export default JobListings;
