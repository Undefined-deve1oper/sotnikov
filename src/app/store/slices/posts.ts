import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import postsService from "../../services/posts.service";
import { IPost } from "../../types/interfaces";
import { RootStore } from "../types";

interface PostState {
    entities: IPost[];
    isLoading: boolean;
    error: string | null;
}

const initialState: PostState = {
    entities: [],
    isLoading: true,
    error: null
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
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const {
    postsRequested,
    postsReceived,
    postsRequestFailed,
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


export const getPostById = (postId: number) => (state: RootStore) => {
    return state.posts.entities
        ? state.posts.entities.find((post: IPost) => post.id === postId)
        : null;
};

export const getPostsList = () => (state: RootStore) => state.posts.entities;
export const getPostsLoadingStatus = () => (state: RootStore) =>
    state.posts.isLoading;

export default postsReducer;
