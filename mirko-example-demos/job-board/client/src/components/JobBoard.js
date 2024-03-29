import JobList from './JobList';
//import { jobs } from '../fake-data';
import { getJobs } from '../graphql/queries'
import { useEffect, useState } from 'react';

function JobBoard() {
  const [jobs, setJobs] = useState([])

  useEffect( () => {
    getJobs().then( (jobs) => setJobs(jobs) )
    .catch( (err) => console.log(err) ); // here we can see what kind of error we get by the server
  }, []);

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
