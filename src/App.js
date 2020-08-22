import React from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs'
import {Container} from 'react-bootstrap'
import { useState } from 'react';
import Job from './Job'
import JobsPagination from './jobsPagination';
import SearchForm from './SearchForm';
function App() {
const [params, setParams] = useState({})
const [page, setPage] = useState(1)
  const {jobs,loading,error,hasNextPage} = useFetchJobs()
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
  <Container className="my-4">
       <h1 className="mb-4">GitHub Jobs</h1>
       <SearchForm params={params} onParamChange={handleParamChange}/>
       <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    {loading && <h1>Loading....</h1>}
    {error && <h1>Error try Refreshing</h1>}
    {jobs.map(job=>{
      return <Job key= {job.id} job={job}></Job>
    })}
  </Container>
  );

}

export default App;
