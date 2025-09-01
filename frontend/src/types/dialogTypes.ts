export interface DialogPreview {
    id: number
    name: string
    create_date: string
}

export interface NewMessage {
    user_message_id: number
    model_message: string
}

export interface Message {
    id: number
    text: string
    sender: string | "user" | "model"
}