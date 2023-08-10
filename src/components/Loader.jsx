import PropTypes from 'prop-types'

export function Loader({ size = '' }) {
    return <div className='d-flex justify-content-center'>
        <div
            className={'spinner-border spinner-border-' + size}
            role='status'>
            <span className='visually-hidden'>Loading...</span>
        </div>
    </div>
}

Loader.propTypes = {
    size: PropTypes.string
}