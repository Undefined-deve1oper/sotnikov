import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import postsService from "../../services/posts.service";
import { IPost } from "../../types/interfaces";
import { AppThunk, RootStore } from "../types";

interface PostState {
    entities: IPost[];
    isLoading: boolean;
    error: string | null;
    filteredEntities: IPost[];
}

const initialState: PostState = {
    entities: [],
    filteredEntities: [],
    isLoading: true,
    error: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postsRequested(state) {
            state.isLoading = true;
        },
        postsReceived(state, action: PayloadAction<IPost[]>) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        postsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        filteredPostsReceived: (state, action: PayloadAction<IPost[]>) => {
            state.filteredEntities = action.payload;
            state.isLoading = false;
        },
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const {
    postsRequested,
    postsReceived,
    postsRequestFailed,
    filteredPostsReceived
} = actions;

export const loadPostsList = () => async (dispatch: Dispatch) => {
    dispatch(postsRequested());
    try {
        const { content } = await postsService.fetchAll();
        dispatch(postsReceived(content));
    } catch (error: any) {
        dispatch(postsRequestFailed(error.message));
    }
};

export const loadFilteredPostsList =
    (queryParams?: any): AppThunk =>
        async (dispatch: Dispatch) => {
            dispatch(postsRequested());
            try {
                const { content } = await postsService.fetchAll(queryParams);
                dispatch(filteredPostsReceived(content || []));
            } catch (error: any) {
                dispatch(postsRequestFailed(error.message));
            }
        };


export const getPostById = (postId: number) => (state: RootStore) => {
    return state.posts.entities
        ? state.posts.entities.find((post: IPost) => post.id === postId)
        : null;
};

export const getPostsList = () => (state: RootStore) => state.posts.entities;
export const getFilteredPosts = () => (state: RootStore) =>
    state.posts.filteredEntities;
export const getPostsLoadingStatus = () => (state: RootStore) =>
    state.posts.isLoading;

export default postsReducer;
