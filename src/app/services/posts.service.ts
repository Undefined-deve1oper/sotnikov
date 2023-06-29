import { IPost } from "../types/interfaces";
import httpService from "./http.service";

const postsEndPoint = "posts";

const postsService = {
    fetchAll: async (params?: any) => {
        const { data } = await httpService.get(postsEndPoint, {
            params: { ...params }
        });
        return data;
    },
    getPostById: async (postId: string) => {
        const { data } = await httpService.get(postsEndPoint + "/" + postId);
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
