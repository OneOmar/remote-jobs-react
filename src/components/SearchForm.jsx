import PropTypes from 'prop-types'

export function SearchForm({ onChange }) {
    return <form className='mb-4 d-flex flex-row align-items-center'>
        <label htmlFor='company-name' className='me-2 form-label'>Company</label>
        <input
            type='text'
            name='company_name'
            className='me-2 form-control'
            id='company-name'
            placeholder='Remotive'
            onChange={onChange}
        />
        <select className='form-select' aria-label='Default' onChange={onChange}>
            <option defaultValue>All categories</option>
            <option value='software-dev'>Software Development</option>
            <option value='customer-support'>Customer Service</option>
            <option value='design'>Design</option>
            <option value='marketing'>Marketing</option>
            <option value='sales'>Sales</option>
            <option value='business'>Business</option>
            <option value='data'>Data</option>
            <option value='devops'>DevOps</option>
            <option value='finance-legal'>Finance / Legal</option>
            <option value='hr'>Human Resources</option>
            <option value='all-others'>Others</option>
        </select>
    </form>
}

SearchForm.propTypes = {
    onChange: PropTypes.func
}