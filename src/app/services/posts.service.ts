import { IPost } from "../types/interfaces";
import httpService from "./http.service";

const postsEndPoint = "posts";

const postsService = {
    fetchAll: async () => {
        const { data } = await httpService.get<IPost[]>(postsEndPoint);
        return data;
    },
    getPostById: async (postId: string) => {
        const { data } = await httpService.get<IPost>(postsEndPoint + "/" + postId);
        return data;
    },
    updatePost: async (payload: IPost) => {
        const { data } = await httpService.patch(
            postsEndPoint + "/" + payload.id,
            payload
        );
        return data;
    },
    deletePost: async (id: string) => {
        const data = await httpService.delete(postsEndPoint + "/" + id);
        return data;
    }
};

export default postsService;
