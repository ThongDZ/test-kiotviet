import {createSlice} from '@reduxjs/toolkit';

export enum Status {
    Default,
    Confirm,
    Connecting,
    Connected,
}

type CustomDomainState = {
    domain?: string;
    status: Status;
    counter: number;
    addedDate: string;
};

const initialState: CustomDomainState = {
    domain: '',
    status: Status.Default,
    counter: 600,
    addedDate: '',
};

export const customDomainSlice = createSlice({
    name: 'customDomain',
    initialState,
    reducers: {
        updateCustomDomain: (state, action) => {
            state.domain = action.payload?.domain || state.domain;
            state.status = action.payload.status;
        },
        updateAddedDate: (state) => {
            const currentDate = new Date();
            state.addedDate = `${currentDate.toLocaleTimeString('vi-VN')} ${currentDate.toLocaleDateString('vi-VN')}`
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        resetCounter: (state) => {
            state.counter = 600;
        }

    },
});

export const { updateCustomDomain, decrement, resetCounter, updateAddedDate } = customDomainSlice.actions;
export default customDomainSlice.reducer;
