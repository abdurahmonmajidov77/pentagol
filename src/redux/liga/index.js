import axios from "axios"
import { API_URL } from "../../utils"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const GetLiga = createAsyncThunk("league/get", async() => {
    return await axios.get(`${API_URL}/league`).then(res => res.data)
})
export const GetLigaId = createAsyncThunk("leagueid/get", async(id) => {
    return await axios.get(`${API_URL}/league/${id}`).then(res => res.data)
})
export const PostLiga = createAsyncThunk("league/post", async({body, config}) => {
    return await axios.post(`${API_URL}/league`,body,config).then(res => res.data)
})
export const DeleteLiga = createAsyncThunk("league/delete", async({id, config}) => {
    return await axios.delete(`${API_URL}/league/${id}`, config).then(res => res.data)
})
export const PutLiga = createAsyncThunk("league/put", async({id, body, config}) => {
    return await axios.put(`${API_URL}/league/${id}`,body,config).then(res => res.data)
})

const LigaSlice = createSlice({
    name: "Group",
    initialState:{
        getLiga:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        getLigaId:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postLiga:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        deleteLiga:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        putLiga:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetLiga.pending] : (state, action) => {
            state.getLiga.Loading = true;
            state.getLiga.Error = false;
            state.getLiga.Success = false;
        },
        [GetLiga.fulfilled] : (state, action) => {
            state.getLiga.Loading = false;
            state.getLiga.Error = false;
            state.getLiga.Success = true;
            state.getLiga.Data = action.payload;
        },
        [GetLiga.rejected] : (state, action) => {
            state.getLiga.Loading = false;
            state.getLiga.Error = true;
            state.getLiga.Success = false;
            state.getLiga.Data = action.payload;
        },//
        [GetLigaId.pending] : (state, action) => {
            state.getLigaId.Loading = true;
            state.getLigaId.Error = false;
            state.getLigaId.Success = false;
        },
        [GetLigaId.fulfilled] : (state, action) => {
            state.getLigaId.Loading = false;
            state.getLigaId.Error = false;
            state.getLigaId.Success = true;
            state.getLigaId.Data = action.payload;
        },
        [GetLigaId.rejected] : (state, action) => {
            state.getLigaId.Loading = false;
            state.getLigaId.Error = true;
            state.getLigaId.Success = false;
            state.getLigaId.Data = action.payload;
        },//
        [PostLiga.pending] : (state, action) => {
            state.postLiga.Loading = true;
            state.postLiga.Error = false;
            state.postLiga.Success = false;
        },
        [PostLiga.fulfilled] : (state, action) => {
            state.postLiga.Loading = false;
            state.postLiga.Error = false;
            state.postLiga.Success = true;
            state.postLiga.Data = action.payload;
        },
        [PostLiga.rejected] : (state, action) => {
            state.postLiga.Loading = false;
            state.postLiga.Error = true;
            state.postLiga.Success = false;
            state.postLiga.Data = action.payload;
        },//
        [DeleteLiga.pending] : (state, action) => {
            state.deleteLiga.Loading = true;
            state.deleteLiga.Error = false;
            state.deleteLiga.Success = false;
        },
        [DeleteLiga.fulfilled] : (state, action) => {
            state.deleteLiga.Loading = false;
            state.deleteLiga.Error = false;
            state.deleteLiga.Success = true;
            state.deleteLiga.Data = action.payload;
        },
        [DeleteLiga.rejected] : (state, action) => {
            state.deleteLiga.Loading = false;
            state.deleteLiga.Error = true;
            state.deleteLiga.Success = false;
            state.deleteLiga.Data = action.payload;
        },//
        [PutLiga.pending] : (state, action) => {
            state.putLiga.Loading = true;
            state.putLiga.Error = false;
            state.putLiga.Success = false;
        },
        [PutLiga.fulfilled] : (state, action) => {
            state.putLiga.Loading = false;
            state.putLiga.Error = false;
            state.putLiga.Success = true;
            state.putLiga.Data = action.payload;
        },
        [PutLiga.rejected] : (state, action) => {
            state.putLiga.Loading = false;
            state.putLiga.Error = true;
            state.putLiga.Success = false;
            state.putLiga.Data = action.payload;
        }
    }
})
export const {} = LigaSlice.actions;
export default LigaSlice.reducer