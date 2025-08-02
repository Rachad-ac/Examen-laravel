import axiosApi from './axios'

const CommentApi = {
    index : async () => {
        return axiosApi.get('/comments')
    },

    store : async (data) => {
        return axiosApi.post('/comments', data)
    },

    update : async (id, data) => {
        return axiosApi.put(`/comments/${id}`, data)
    },

    delete : async (id) => {
        return axiosApi.delete(`/comments/${id}`)
    },

    getCommentById : async (id) => {
        return axiosApi.get(`/comments/${id}`)
    }           

    ,
    getCommentsByProjectId : async (projectId) => {
        return axiosApi.get(`/projects/${projectId}/comments`)          
    }, 
    getCommentsByTaskId : async (taskId) => {
        return axiosApi.get(`/taches/${taskId}/comments`)          
    }
   
}

export default CommentApi;