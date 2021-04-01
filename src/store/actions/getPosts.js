import API from '../../utils/API'
export const GET = "GET"
export const get = (res) => {
    return{
        type: GET,
        value: res
    }
}



export const getAllPosts = () => {
    return dispatch => {
        API.getAllPosts()
        .then(res => {
            dispatch(get(res.data))
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getFinancePosts = () => {
    return function(dispatch) {
       return API.getFinancePosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}

export const getWorldPosts = () => {
    return function(dispatch) {
       return API.getWorldPosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}
export const getUSPosts = () => {
    return function(dispatch) {
       return API.getUSPosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}

export const getAGPosts = () => {
    return function(dispatch) {
       return API.getAGPosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}

export const getCulturePosts = () => {
    return function(dispatch) {
       return API.getCulturePosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}
export const getHealthPosts = () => {
    return function(dispatch) {
       return API.getHealthPosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}
export const getTradePosts = () => {
    return function(dispatch) {
       return API.getTradePosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}

export const getPoliticsPosts = () => {
    return function(dispatch) {
       return API.getPoliticsPosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}

export const getMilitaryPosts = () => {
    return function(dispatch) {
       return API.getMilitaryPosts()
        .then(({data}) =>{
            dispatch(get(data))
        })
    }
}