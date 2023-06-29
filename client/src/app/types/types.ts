type UserCompany = {
    name: string,
    catchPhrase: string,
    bs: string;
}

type UserAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string,
    geo: {
        [x: string]: string;
    }
}

export type UserType = {
    id: number;
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string;
    company?: UserCompany
}