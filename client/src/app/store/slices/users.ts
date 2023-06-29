import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { RootStore } from "../types";
import { UserType } from "../../types/types";
import usersService from "../../services/users.service";

interface UserState {
    entities: UserType[];
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    entities: [],
    isLoading: true,
    error: null
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested(state) {
            state.isLoading = true;
        },
        usersReceived(state, action: PayloadAction<UserType[]>) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        usersRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
} = actions;

export const loadUsersList = () => async (dispatch: Dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await usersService.fetchAll();
        dispatch(usersReceived(content));
    } catch (error: any) {
        dispatch(usersRequestFailed(error.message));
    }
};


export const getUserById = (userId: number) => (state: RootStore) => {
    return state.users.entities
        ? state.users.entities.find((user: UserType) => user.id === userId)
        : null;
};

export const getUsersList = () => (state: RootStore) => state.users.entities;
export const getUsersLoadingStatus = () => (state: RootStore) =>
    state.users.isLoading;

export default usersReducer;
