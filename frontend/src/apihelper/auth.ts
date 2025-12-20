import api from './api';
import { ENDPOINTS } from './endpoints';

export const login = async (data: any) => {
    const response = await api.post(ENDPOINTS.AUTH.LOGIN, data);
    return response.data;
};

export const register = async (data: any) => {
    const response = await api.post(ENDPOINTS.AUTH.REGISTER, data);
    return response.data;
};

export const sendOtp = async (email: string) => {
    const response = await api.post(ENDPOINTS.AUTH.SEND_OTP, { email });
    return response.data;
};

export const verifyOtp = async (email: string, otp: string) => {
    const response = await api.post(ENDPOINTS.AUTH.VERIFY_OTP, { email, otp });
    return response.data;
};

export const forgotPassword = async (email: string) => {
    const response = await api.post(ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
    return response.data;
};

export const resetPassword = async (data: any) => {
    const response = await api.post(ENDPOINTS.AUTH.RESET_PASSWORD, data);
    return response.data;
};
