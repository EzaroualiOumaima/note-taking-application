import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 export const fetchNotes = createAsyncThunk(
    'notes/getAllnotes' , 
    async (  ) => {
        try {
           const response = await fetch('/api/tasks');
            const data = await response.json() ;
            console.log(data)
            return data; 
        } catch (error) {
           return error
        }
    }
)

 export const addNotes = createAsyncThunk(
    'notes/addnotes' ,
    async(credentials : {title :string , description : string} , thunkApi) => {
        try {
            const res = await axios.post("/api/tasks" , credentials )
              
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const updateNote = createAsyncThunk(
    'notes/putnotes' , 
    async(credentials : { id : string , title : string , description : string} , thunkApi)=> {
     try {
        const res = await axios.put(`/api/tasks/${credentials.id}`, {title: credentials.title , description: credentials.description})
     } catch (error) {
        return thunkApi.rejectWithValue(error)
     }
    }
)

export const deleteNote = createAsyncThunk (
    'notes/deletenotes' , 
    async(id : string , thunkApi)=> {
        try {
            await axios.delete(`/api/tasks/${id}`)
            // alert("item Deleted")  
            window.location.reload()  
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
        
)

