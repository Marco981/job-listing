import React from 'react';
import Header from './components/Header/Header';
import JobListings from './components/JobListings/JobListings';

import './App.scss';

function App() {
    return (
        <div className='App'>
            <Header />
            <JobListings />
        </div>
    );
}

export default App;
