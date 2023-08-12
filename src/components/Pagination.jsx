import PropTypes from 'prop-types'

export function Pagination({ currentPage, totalJobs, jobsPerPage, paginate, adjustPage }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav aria-label='page-navigation'>
            <ul className='pagination justify-content-center'>
                {currentPage !== 1 && <li className='page-item'>
                    <a onClick={() => adjustPage(-1)} className='page-link' href='#' aria-label='Previous'>
                        <span aria-hidden='true'>&laquo;</span>
                    </a>
                </li>}
                {pageNumbers.map(number => (
                    < li
                        key={number}
                        className={number !== currentPage ? 'page-item' : 'page-item active'} >
                        <a onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                {currentPage !== pageNumbers.length && <li className='page-item'>
                    <a onClick={() => adjustPage(1)} className='page-link' href='#' aria-label='Next'>
                        <span aria-hidden='true'>&raquo;</span>
                    </a>
                </li>}
            </ul>
        </nav >
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    jobsPerPage: PropTypes.number,
    totalJobs: PropTypes.number,
    paginate: PropTypes.func,
    adjustPage: PropTypes.func
}
