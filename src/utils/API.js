import axios from 'axios'
export default {
    getAllPosts: function(){
        return axios.get('/api/Post')
    },
    getWorldPosts: function(){
        return axios.get('/api/Post/?tags=World')
    },
    getFinancePosts: function(){
        return axios.get('/api/Post/?tags=Finance')
    },
    getUSPosts: function(){
        return axios.get('/api/Post/?tags=US')
    },
    getAGPosts: function(){
        return axios.get('/api/Post/?tags=Agriculture')
    },
    getCulturePosts: function(){
        return axios.get('api/Post/?tags=Culture')
    },
    getHealthPosts: function(){
        return axios.get('api/Post/?tags=Health')
    },
    getTradePosts: function(){
        return axios.get('api/Post/?tags=Trade')
    },
    getPoliticsPosts: function(){
        return axios.get('api/Post/?tags=Politics')
    },
    getMilitaryPosts: function(){
        return axios.get('api/Post/?tags=Military')
    },
    getVaccineData: function(){
        return axios.get('http://staticvaccineapi.azurewebsites.net/data/United States')
    }
}