import axios from 'axios'
import { useEffect, useReducer } from 'react'

// CORS anywhere
// https://cors-anywhere.herokuapp.com/
const BASE_URL = 'https://remotive.com/api/remote-jobs?limit=100'
const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {
    console.log('REDUCER', action.type)
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        default:
            return state
    }
}

export function useFetchJobs(params) {
    const [state, dispatch] = useReducer(reducer, { loading: true, jobs: [] })

    useEffect(() => {
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.
            get(BASE_URL, {
                params: params
            }).then(res => {
                dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data.jobs } })
            }).catch(err => {
                dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
            })
    }, [params])

    return state
}