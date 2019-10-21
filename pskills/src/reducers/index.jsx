import {LOAD_DATA, LOAD_SUCCESS, LOAD_FAILURE} from '../actions/index'

const initialState = {
    jobData: [],
    loading: false,
    error: '',
    
};

// React 2 stuff, feel free to check it out

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_DATA:
            return{
                ...state,
                loading: true,
                error: ''
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                jobData: action.payload
            }
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;