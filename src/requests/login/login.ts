import { AxiosResponse } from "axios";
import { Axios } from "../../lib/axios.ts";
import { LoginData } from "./use-login.tsx";

export default async function login({ email, password }: LoginData): Promise<AxiosResponse> {
    return Axios({
        method: "POST",
        url: "http://localhost:8000/v1/users/self/authenticate",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify({ email: email, password: password }),
    });
}