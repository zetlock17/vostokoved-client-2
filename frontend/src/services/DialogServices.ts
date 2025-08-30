import type { DialogPreview, Message, NewMessage } from "../types/dialogTypes";
import { getRequest, postRequest, type ApiResponse } from "./api";

export const newUser = async (): Promise<ApiResponse<string>> => {
    const response = await postRequest<string>("/dialog/user", {});
    console.log("New session ID:", response);
    return response;
}

export const getDialogs = (): Promise<ApiResponse<DialogPreview[]>> => {
    return getRequest<DialogPreview[]>("/dialog/chat");
}

export const newChat = (): Promise<ApiResponse> => {
    return postRequest("/dialog/chat");
}

export const sendMessage = (text: string, chat_id: number): Promise<ApiResponse<NewMessage>> => {
    return postRequest<NewMessage>("/dialog/message?text=" + text + "&chat_id=" + chat_id);
}

export const getDialog = (chat_id: number): Promise<ApiResponse<Message[]>> => {
    return getRequest<Message[]>("/dialog/message?chat_id=" + chat_id);
}