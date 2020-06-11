import React from 'react';

import './Filters.scss';

export default function Filters(props) {
    return (
        <div className='filters-section'>
            <div className='filters-container'>
                {props.filters.map((filter, index) => {
                    return (
                        <div className='filter' key={index}>
                            <div className='filter__name'>{filter}</div>
                            <button
                                type='button'
                                onClick={() => props.remove(filter)}
                                className='filter__close-button'
                            />
                        </div>
                    );
                })}
            </div>
            <button type='button' className='filters-section__clear-button' onClick={props.clearFilters}>
                Clear
            </button>
        </div>
    );
}
