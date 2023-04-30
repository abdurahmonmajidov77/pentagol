import axios from "axios"
import { API_URL } from "../../utils"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const GetGroup = createAsyncThunk("group/get", async(headers) => {
    return await axios.get(`${API_URL}/club` ,headers).then(res => res.data)
})
export const GetGroupId = createAsyncThunk("groupid/get", async(id) => {
    return await axios.get(`${API_URL}/club/${id}`).then(res => res.data)
})
export const GetGroupLegueId = createAsyncThunk("groupid/get", async(id) => {
    return await axios.get(`${API_URL}/club/clubpropertiesbyleague/${id}`).then(res => res.data)
})
export const PostGroup = createAsyncThunk("group/post", async({body, config}) => {
    return await axios.post(`${API_URL}/club`,body,config).then(res => res.data)
})
export const DeleteGroup = createAsyncThunk("group/delete", async({id, config}) => {
    return await axios.delete(`${API_URL}/club/${id}`, config).then(res => res.data)
})
export const PutGroup = createAsyncThunk("group/put", async({id, body, config}) => {
    return await axios.put(`${API_URL}/club/${id}`,body,config).then(res => res.data)
})

const GroupSlice = createSlice({
    name: "group",
    initialState:{
        getGroup:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        getGroupId:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        getGroupLegueId:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postGroup:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        deleteGroup:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        putGroup:{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetGroup.pending] : (state, action) => {
            state.getGroup.Loading = true;
            state.getGroup.Error = false;
            state.getGroup.Success = false;
        },
        [GetGroup.fulfilled] : (state, action) => {
            state.getGroup.Loading = false;
            state.getGroup.Error = false;
            state.getGroup.Success = true;
            state.getGroup.Data = action.payload;
        },
        [GetGroup.rejected] : (state, action) => {
            state.getGroup.Loading = false;
            state.getGroup.Error = true;
            state.getGroup.Success = false;
            state.getGroup.Data = action.payload;
        },//
        [GetGroupId.pending] : (state, action) => {
            state.getGroupId.Loading = true;
            state.getGroupId.Error = false;
            state.getGroupId.Success = false;
        },
        [GetGroupId.fulfilled] : (state, action) => {
            state.getGroupId.Loading = false;
            state.getGroupId.Error = false;
            state.getGroupId.Success = true;
            state.getGroupId.Data = action.payload;
        },
        [GetGroupId.rejected] : (state, action) => {
            state.getGroupId.Loading = false;
            state.getGroupId.Error = true;
            state.getGroupId.Success = false;
            state.getGroupId.Data = action.payload;
        },//
        [GetGroupLegueId.pending] : (state, action) => {
            state.getGroupLegueId.Loading = true;
            state.getGroupLegueId.Error = false;
            state.getGroupLegueId.Success = false;
        },
        [GetGroupLegueId.fulfilled] : (state, action) => {
            state.getGroupLegueId.Loading = false;
            state.getGroupLegueId.Error = false;
            state.getGroupLegueId.Success = true;
            state.getGroupLegueId.Data = action.payload;
        },
        [GetGroupLegueId.rejected] : (state, action) => {
            state.getGroupLegueId.Loading = false;
            state.getGroupLegueId.Error = true;
            state.getGroupLegueId.Success = false;
            state.getGroupLegueId.Data = action.payload;
        },//
        [PostGroup.pending] : (state, action) => {
            state.postGroup.Loading = true;
            state.postGroup.Error = false;
            state.postGroup.Success = false;
        },
        [PostGroup.fulfilled] : (state, action) => {
            state.postGroup.Loading = false;
            state.postGroup.Error = false;
            state.postGroup.Success = true;
            state.postGroup.Data = action.payload;
        },
        [PostGroup.rejected] : (state, action) => {
            state.postGroup.Loading = false;
            state.postGroup.Error = true;
            state.postGroup.Success = false;
            state.postGroup.Data = action.payload;
        },//
        [DeleteGroup.pending] : (state, action) => {
            state.deleteGroup.Loading = true;
            state.deleteGroup.Error = false;
            state.deleteGroup.Success = false;
        },
        [DeleteGroup.fulfilled] : (state, action) => {
            state.deleteGroup.Loading = false;
            state.deleteGroup.Error = false;
            state.deleteGroup.Success = true;
            state.deleteGroup.Data = action.payload;
        },
        [DeleteGroup.rejected] : (state, action) => {
            state.deleteGroup.Loading = false;
            state.deleteGroup.Error = true;
            state.deleteGroup.Success = false;
            state.deleteGroup.Data = action.payload;
        },//
        [PutGroup.pending] : (state, action) => {
            state.putGroup.Loading = true;
            state.putGroup.Error = false;
            state.putGroup.Success = false;
        },
        [PutGroup.fulfilled] : (state, action) => {
            state.putGroup.Loading = false;
            state.putGroup.Error = false;
            state.putGroup.Success = true;
            state.putGroup.Data = action.payload;
        },
        [PutGroup.rejected] : (state, action) => {
            state.putGroup.Loading = false;
            state.putGroup.Error = true;
            state.putGroup.Success = false;
            state.putGroup.Data = action.payload;
        }
    }
})
export const {} = GroupSlice.actions;
export default GroupSlice.reducer