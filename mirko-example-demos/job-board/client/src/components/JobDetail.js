import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getJob } from '../graphql/queries';
//import { jobs } from '../fake-data';
//import {} from 

function JobDetail() {

  const [job, setJob] = useState(null)

  const { jobId } = useParams();

  useEffect( () => {
    getJob(jobId).then( (job) => setJob(job) );
  }, [jobId]);

  if(!job){
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>
          {job.company.name}
        </Link>
      </h2>
      <div className="box">
        {job.description}
      </div>
    </div>
  );
}

export default JobDetail;
