import axios from "axios"
import { API_URL } from "../../utils"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const GetNews = createAsyncThunk("news/get", async() => {
    return await axios.get(`${API_URL}`).then(res => res.data)
})
export const GetNewsId = createAsyncThunk("newsid/get", async(id) => {
    return await axios.get(`${API_URL}/${id}`).then(res => res.data)
})
export const PostNews = createAsyncThunk("news/post", async({body, config}) => {
    return await axios.post(`${API_URL}`,body,config).then(res => res.data)
})
export const DeleteNews = createAsyncThunk("news/delete", async({id, config}) => {
    return await axios.delete(`${API_URL}/${id}`, config).then(res => res.data)
})
export const PutNews = createAsyncThunk("news/put", async({id, body, config}) => {
    return await axios.put(`${API_URL}/${id}`,body,config).then(res => res.data)
})

const NewsSlice = createSlice({
    name: "news",
    initialState:{
        getNews:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        getNewsId:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postNews:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        deleteNews:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        putNews:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetNews.pending] : (state, action) => {
            state.getNews.Loading = true;
            state.getNews.Error = false;
            state.getNews.Success = false;
        },
        [GetNews.fulfilled] : (state, action) => {
            state.getNews.Loading = false;
            state.getNews.Error = false;
            state.getNews.Success = true;
            state.getNews.Data = action.payload;
        },
        [GetNews.rejected] : (state, action) => {
            state.getNews.Loading = false;
            state.getNews.Error = true;
            state.getNews.Success = false;
            state.getNews.Data = action.payload;
        },//
        [GetNewsId.pending] : (state, action) => {
            state.getNewsId.Loading = true;
            state.getNewsId.Error = false;
            state.getNewsId.Success = false;
        },
        [GetNewsId.fulfilled] : (state, action) => {
            state.getNewsId.Loading = false;
            state.getNewsId.Error = false;
            state.getNewsId.Success = true;
            state.getNewsId.Data = action.payload;
        },
        [GetNewsId.rejected] : (state, action) => {
            state.getNewsId.Loading = false;
            state.getNewsId.Error = true;
            state.getNewsId.Success = false;
            state.getNewsId.Data = action.payload;
        },//
        [PostNews.pending] : (state, action) => {
            state.postNews.Loading = true;
            state.postNews.Error = false;
            state.postNews.Success = false;
        },
        [PostNews.fulfilled] : (state, action) => {
            state.postNews.Loading = false;
            state.postNews.Error = false;
            state.postNews.Success = true;
            state.postNews.Data = action.payload;
        },
        [PostNews.rejected] : (state, action) => {
            state.postNews.Loading = false;
            state.postNews.Error = true;
            state.postNews.Success = false;
            state.postNews.Data = action.payload;
        },//
        [DeleteNews.pending] : (state, action) => {
            state.deleteNews.Loading = true;
            state.deleteNews.Error = false;
            state.deleteNews.Success = false;
        },
        [DeleteNews.fulfilled] : (state, action) => {
            state.deleteNews.Loading = false;
            state.deleteNews.Error = false;
            state.deleteNews.Success = true;
            state.deleteNews.Data = action.payload;
        },
        [DeleteNews.rejected] : (state, action) => {
            state.deleteNews.Loading = false;
            state.deleteNews.Error = true;
            state.deleteNews.Success = false;
            state.deleteNews.Data = action.payload;
        },//
        [PutNews.pending] : (state, action) => {
            state.putNews.Loading = true;
            state.putNews.Error = false;
            state.putNews.Success = false;
        },
        [PutNews.fulfilled] : (state, action) => {
            state.putNews.Loading = false;
            state.putNews.Error = false;
            state.putNews.Success = true;
            state.putNews.Data = action.payload;
        },
        [PutNews.rejected] : (state, action) => {
            state.putNews.Loading = false;
            state.putNews.Error = true;
            state.putNews.Success = false;
            state.putNews.Data = action.payload;
        }
    }
})
export const {} = NewsSlice.actions;
export default NewsSlice.reducer