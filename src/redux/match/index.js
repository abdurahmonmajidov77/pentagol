import axios from "axios"
import { API_URL } from "../../utils"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const GetMatch = createAsyncThunk("match/get", async() => {
    return await axios.get(`${API_URL}`).then(res => res.data)
})
export const GetMatchId = createAsyncThunk("matchid/get", async(id) => {
    return await axios.get(`${API_URL}/${id}`).then(res => res.data)
})
export const PostMatch = createAsyncThunk("match/post", async({body, config}) => {
    return await axios.post(`${API_URL}`,body,config).then(res => res.data)
})
export const DeleteMatch = createAsyncThunk("match/delete", async({id, config}) => {
    return await axios.delete(`${API_URL}/${id}`, config).then(res => res.data)
})
export const PutMatch = createAsyncThunk("match/put", async({id, body, config}) => {
    return await axios.put(`${API_URL}/${id}`,body,config).then(res => res.data)
})

const MatchSlice = createSlice({
    name: "match",
    initialState:{
        getMatch:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        getMatchId:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postMatch:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        deleteMatch:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        putMatch:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetMatch.pending] : (state, action) => {
            state.getMatch.Loading = true;
            state.getMatch.Error = false;
            state.getMatch.Success = false;
        },
        [GetMatch.fulfilled] : (state, action) => {
            state.getMatch.Loading = false;
            state.getMatch.Error = false;
            state.getMatch.Success = true;
            state.getMatch.Data = action.payload;
        },
        [GetMatch.rejected] : (state, action) => {
            state.getMatch.Loading = false;
            state.getMatch.Error = true;
            state.getMatch.Success = false;
            state.getMatch.Data = action.payload;
        },//
        [GetMatchId.pending] : (state, action) => {
            state.getMatchId.Loading = true;
            state.getMatchId.Error = false;
            state.getMatchId.Success = false;
        },
        [GetMatchId.fulfilled] : (state, action) => {
            state.getMatchId.Loading = false;
            state.getMatchId.Error = false;
            state.getMatchId.Success = true;
            state.getMatchId.Data = action.payload;
        },
        [GetMatchId.rejected] : (state, action) => {
            state.getMatchId.Loading = false;
            state.getMatchId.Error = true;
            state.getMatchId.Success = false;
            state.getMatchId.Data = action.payload;
        },//
        [PostMatch.pending] : (state, action) => {
            state.postMatch.Loading = true;
            state.postMatch.Error = false;
            state.postMatch.Success = false;
        },
        [PostMatch.fulfilled] : (state, action) => {
            state.postMatch.Loading = false;
            state.postMatch.Error = false;
            state.postMatch.Success = true;
            state.postMatch.Data = action.payload;
        },
        [PostMatch.rejected] : (state, action) => {
            state.postMatch.Loading = false;
            state.postMatch.Error = true;
            state.postMatch.Success = false;
            state.postMatch.Data = action.payload;
        },//
        [DeleteMatch.pending] : (state, action) => {
            state.deleteMatch.Loading = true;
            state.deleteMatch.Error = false;
            state.deleteMatch.Success = false;
        },
        [DeleteMatch.fulfilled] : (state, action) => {
            state.deleteMatch.Loading = false;
            state.deleteMatch.Error = false;
            state.deleteMatch.Success = true;
            state.deleteMatch.Data = action.payload;
        },
        [DeleteMatch.rejected] : (state, action) => {
            state.deleteMatch.Loading = false;
            state.deleteMatch.Error = true;
            state.deleteMatch.Success = false;
            state.deleteMatch.Data = action.payload;
        },//
        [PutMatch.pending] : (state, action) => {
            state.putMatch.Loading = true;
            state.putMatch.Error = false;
            state.putMatch.Success = false;
        },
        [PutMatch.fulfilled] : (state, action) => {
            state.putMatch.Loading = false;
            state.putMatch.Error = false;
            state.putMatch.Success = true;
            state.putMatch.Data = action.payload;
        },
        [PutMatch.rejected] : (state, action) => {
            state.putMatch.Loading = false;
            state.putMatch.Error = true;
            state.putMatch.Success = false;
            state.putMatch.Data = action.payload;
        }
    }
})
export const {} = MatchSlice.actions;
export default MatchSlice.reducer