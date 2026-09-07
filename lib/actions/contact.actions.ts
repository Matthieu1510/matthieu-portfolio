"use server";

import { connectDB } from "@/lib/mongodb";
import Message from "@/database/message.model";

export type ContactState = {
    success: boolean;
    error?: string;
};

export async function sendMessage(
    _prevState: ContactState | null,
    formData: FormData
): Promise<ContactState> {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
        return { success: false, error: "Please fill in all fields." };
    }

    try {
        await connectDB();
        await Message.create({ name, email, message });
        return { success: true };
    } catch (error) {
        console.error("Error saving the message :", error);
        return { success: false, error: "An error occurred; please try again later.." };
    }
}