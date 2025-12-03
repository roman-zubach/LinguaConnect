import axios from 'axios';
import Toast from 'react-native-toast-message';

const BASE_URL = 'https://692c2c41c829d464006ebbd2.mockapi.io';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
});

api.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
);

api.interceptors.response.use(
    response => response,
    error => {
        const status = error.response?.status;

        // 🟦 Глобальна обробка 404 → повертаємо пустий масив через баг в MockAPI
        if (status === 404) {
            return Promise.resolve({ data: [] });
        }

        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: error.response?.data?.message ?? 'Something went wrong',
        });

        return Promise.reject(error);
    },
);

export async function apiGet<T, Y>(url: string, params?: Y): Promise<T> {
    const res = await api.get<T>(url, { params });
    return res.data;
}

export async function apiPost<T, Y>(url: string, body?: Y): Promise<T> {
    const res = await api.post<T>(url, body);
    return res.data;
}

export async function apiPut<T, Y>(url: string, body?: Y): Promise<T> {
    const res = await api.put<T>(url, body);
    return res.data;
}

export async function apiDelete<T>(url: string): Promise<T> {
    const res = await api.delete<T>(url);
    return res.data;
}
