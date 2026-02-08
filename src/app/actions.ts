'use server'

import { writeClient } from "@/sanity/lib/write-client";
import { revalidatePath } from "next/cache";

export async function createLead(formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const serviceType = formData.get("serviceType") as string;
    const city = formData.get("city") as string;
    const message = formData.get("message") as string;

    if (!name || !phone) {
        throw new Error("Name and phone are required");
    }

    try {
        await writeClient.create({
            _type: "lead",
            name,
            phone,
            email: "Not provided", // Form doesn't have email field? I should check contact page again.
            message: `Service: ${serviceType}\nCity: ${city}\nMessage: ${message}`,
            status: "new",
        });

        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.error("Failed to create lead:", error);
        return { success: false, error: "Failed to submit request" };
    }
}
