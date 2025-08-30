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

export const newChat = async (): Promise<ApiResponse> => {
    const response = await postRequest("/dialog/chat");
    console.log("New chat:", response);
    return response;
}

export const sendMessage = async (text: string, chat_id: number): Promise<ApiResponse<NewMessage>> => {
    const response = await postRequest<NewMessage>("/dialog/message", { text: text, chat_id: chat_id });
    console.log("New message:", response);
    return response;
}

export const getDialog = (chat_id: number): Promise<ApiResponse<Message[]>> => {
    return getRequest<Message[]>("/dialog/message", { chat_id });
}

export const deleteDialog = (chat_id: number): Promise<ApiResponse<string>> => {
    return postRequest<string>(`/dialog/chat-delete?chat_id=${chat_id}`, {});
}