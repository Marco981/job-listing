import React, { useState, useEffect } from 'react';
import jobsData from '../../data/data.json';
import JobListing from './JobListing/JobListing';
import Filters from './Filters/Filters';

import './JobListings.scss';

export interface JobModel {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
    filters: string[];
}

function JobListings() {
    const [ jobs, setJobs ] = useState<JobModel[]>([]);
    const [ filters, setFilters ] = useState<string[]>([]);

    useEffect(() => {
        const jobsWithFilters = jobsData.map((job) => {
            return { ...job, filters: [ job.role, job.level, ...job.languages, ...job.tools ] };
        });
        setJobs(jobsWithFilters);
    }, []);

    const addFilter = (language: string) => {
        if (!filters.includes(language)) {
            setFilters(filters.concat(language));
        }
    };

    const removeFilter = (language: string) => {
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
