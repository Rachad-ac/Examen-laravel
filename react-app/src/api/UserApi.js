import axiosApi from './axios'

const UserApi = {
    login : async (email , password) => {
        return axiosApi.post('/login' , {email , password})
    },

    register : async (data) => {
        return axiosApi.post('/register' , data)
    },

    logout : async () => {
        return axiosApi.post('/logout')
    },

    getUser : () => {
        return axiosApi.get('/user')
    },

    getAllUsers: () => {
        return axiosApi.get('/user/all'); 
    },

    getMyProjects : () => {
        return axiosApi.get('/projects')
    },

    getMyTaches : () => {
        return axiosApi.get('/taches')
    }
}

export default UserApi;