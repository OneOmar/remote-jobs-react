import PropTypes from 'prop-types'
import { useState } from 'react'
// import ReactMarkdown from 'react-markdown'

export function Job({ job }) {
    const [open, setOpen] = useState(false)
    return <div className='card mb-3'>
        <div className='card-body'>
            <div className='d-flex justify-content-between mb-2'>
                <div>
                    <div className='card-title'>
                        {job.title} - <span className='text-muted font-weight-light'>{job.company_name}</span>
                    </div>
                    <div className='text-muted mb-2'>
                        {new Date(job.publication_date).toLocaleDateString()}
                    </div>
                    <div className='mb-2'>
                        <span className='badge text-bg-secondary me-2'>{job.job_type}</span>
                        {/* TODO: Add text-truncate style */}
                        <span className='badge text-bg-secondary' style={{ maxWidth: '150px' }}>{job.candidate_required_location}</span>
                    </div>
                    <a href={job.url} className='card-link'>Link to apply</a>
                </div>
                <img className='d-none d-md-block' height='50' alt={job.company_name} src={job.company_logo} />
            </div>
            <div className='card-text'>
                <button
                    className='btn btn-primary'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#${job.id}`}
                    aria-expanded='false'
                    aria-controls={job.id}
                    onClick={() => setOpen(prevOpen => !prevOpen)}>
                    {open ? 'Hide Details' : 'View Details'}
                </button>
                <div className='mt-4 collapse' id={job.id}>
                    {/* <ReactMarkdown>**A bold text**</ReactMarkdown> */}
                    <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                </div>
            </div>
        </div>
    </div >
}

Job.propTypes = {
    job: PropTypes.object.isRequired
}