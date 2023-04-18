import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    address: undefined,
    exp: undefined,
    bestPerformers: [],
}

export const zkRecordSlice = createSlice({
    name: 'zkRecord',
    initialState,
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setExp: (state, action) => {
            state.exp = action.payload
        },
        setBestPerformers: (state, action) => {
            state.bestPerformers = action.payload
        },
        }
})

export const { setAddress, setExp,  setBestPerformers} = zkRecordSlice.actions

export const zkRecordSelector = (state) => state.zkRecord;

export default zkRecordSlice.reducer


