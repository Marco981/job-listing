import React from 'react';

import './JobListing.scss';

export default function JobListing(props) {
    const jobListingClasses = props.featured ? 'joblisting-container featured' : 'joblisting-container';
    return (
        <div className={jobListingClasses}>
            <div className='joblisting__main-content-container'>
                <div className='img-container'>
                    <img src={props.logo} alt={`${props.company} logo`} />
                </div>
                <div className='joblisting__job-container'>
                    <div className='joblisting__top-specs'>
                        <span className='joblisting__company-name'>{props.company}</span>
                        {props.new && <span className='joblisting__new-job'>new!</span>}
                        {props.featured && <span className='joblisting__featured'>featured</span>}
                    </div>
                    <h3 className='joblisting__job-title'>{props.position}</h3>
                    <div className='joblisting__job-details-container'>
                        <span className='joblisting__date '>{props.postedAt}</span>
                        <span>&bull;</span>
                        <span className='joblisting__type'>{props.contract}</span>
                        <span>&bull;</span>
                        <span className='joblisting__location'>{props.location}</span>
                    </div>
                </div>
            </div>
            <div className='joblisting__languages-container'>
                {props.filters.map((language, i) => {
                    return (
                        <div onClick={() => props.click(language)} key={i} className='language'>
                            {language}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
