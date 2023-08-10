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
        // value={params.company_name}
        />
        {/* TODO: Add onChange Handler */}
        <select className='form-select' aria-label='Default'>
            <option defaultValue>All categories</option>
            <option data-name='category' value='software-dev'>Software Development</option>
            <option data-name='category' value='customer-support'>Customer Service</option>
            <option data-name='category' value='design'>Design</option>
            <option data-name='category' value='marketing'>Marketing</option>
            <option data-name='category' value='sales'>Sales</option>
            <option data-name='category' value='business'>Business</option>
            <option data-name='category' value='data'>Data</option>
            <option data-name='category' value='devops'>DevOps</option>
            <option data-name='category' value='finance-legal'>Finance / Legal</option>
            <option data-name='category' value='hr'>Human Resources</option>
            <option data-name='category' value='all-others'>Others</option>
        </select>
    </form>
}

SearchForm.propTypes = {
    params: PropTypes.object,
    onChange: PropTypes.func
}