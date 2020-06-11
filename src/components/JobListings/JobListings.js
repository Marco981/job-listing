import React, { Component } from 'react';
import jobs from '../../data/data.json';
import JobListing from './JobListing/JobListing';
import Filters from './Filters/Filters';

import './JobListings.scss';

class JobListings extends Component {
    state = {
        jobs: [],
        filters: []
    };

    componentDidMount() {
        const jobsWithFilters = jobs.map((job) => {
            return { ...job, filters: [ job.role, job.level, ...job.languages, ...job.tools ] };
        });

        this.setState({
            jobs: jobsWithFilters
        });
    }

    addFilter = (language) => {
        if (!this.state.filters.includes(language)) {
            this.setState({
                filters: this.state.filters.concat(language)
            });
        }
    };

    removeFilter = (language) => {
        this.setState({
            filters: this.state.filters.filter((f) => {
                return f !== language;
            })
        });
    };

    filterJobs = () => {
        const filteredJobs = this.state.jobs.filter((job) => {
            return this.state.filters.every((filter) => {
                return job.filters.includes(filter);
            });
        });

        return filteredJobs;
    };

    clearFilters = () => {
        this.setState({
            filters: []
        });
    };

    render() {
        return (
            <div className='job-listings'>
                {this.state.filters.length > 0 && (
                    <Filters filters={this.state.filters} remove={this.removeFilter} clearFilters={this.clearFilters} />
                )}
                {this.filterJobs().map((job) => {
                    return <JobListing click={this.addFilter} key={job.id} {...job} />;
                })}
            </div>
        );
    }
}

export default JobListings;
