import httpService from "./http.service";

const usersEndPoint = "users";

const usersService = {
    fetchAll: async () => {
        const { data } = await httpService.get(usersEndPoint);
        return data;
    },
    getUserById: async (userId: number) => {
        const { data } = await httpService.get(usersEndPoint + "/" + userId);
        return data;
    }
};

export default usersService;
