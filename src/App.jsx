import { useCallback, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import { useFetchJobs } from './hooks/useFetchJobs'
import { Job } from './components/Job'
import { SearchForm } from './components/SearchForm'
import { Pagination } from './components/Pagination'
import { Loader } from './components/Loader'

export default function App() {

  const [params, setParams] = useState({})
  const { loading, errors, jobs } = useFetchJobs(params)
  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [jobsPerPage] = useState(10)

  // memoize the callback with useCallback
  // we need it since it's a dependency in useMemo below
  const handleParamChange = useCallback((e) => {
    const type = e.target.type
    const param = (type === 'text' ? e.target.name : 'category')
    const value = e.target.value
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }, [])


  // memoize the debounce call with useMemo
  const debouncedSendRequest = useMemo(() => {
    return debounce(handleParamChange, 1000)
  }, [handleParamChange])


  function onChange(e) {
    const value = e.target.value
    setValue(value)
    debouncedSendRequest(e)
  }

  // Get current jobs!
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

  // Current page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  // Adjust Page (Previous & Next Page)
  const adjustPage = (step) => {
    setCurrentPage(currentPage + step)
  }


  return (
    <div className='container my-4'>
      <h1 className='text-primary mb-4'>Remote Jobs </h1>
      <SearchForm value={value} onChange={onChange} />
      {loading && <Loader />}
      {errors && <div className='alert alert-danger' role='alert'>ERROR! Try Refreshing</div>}
      {!loading && <Pagination
        currentPage={currentPage}
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.length}
        paginate={paginate}
        adjustPage={adjustPage}
      />}
      {currentJobs.map(job => {
        return <Job key={job.id} job={job}></Job>
      })}
    </div>
  )
}