"use server";
import { createAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";
import { getAccountDetail } from "@/action";

async function addAccount(previousState: any, formData: FormData) {
  // Get databases instance
  const { databases } = await createAdminClient();

  try {
    const { user } = await checkAuth();

    if (!user) {
      return {
        error: "You must be logged in to create a room",
      };
    }

    const data = await getAccountDetail(formData.get("accountId") as string);

    if (data.error) {
      return {
        error: data.error,
      };
    }

    // Create account
    const newAccount = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ACCOUNTS as string,
      ID.unique(),
      {
        accountId: formData.get("accountId"),
      }
    );

    revalidatePath("/coc", "page");

    return {
      success: true,
    };
  } catch (error: any) {
    console.log(error);
    const errorMessage =
      error.response.message || "An unexpected error has occured";
    return {
      error: errorMessage,
    };
  }
}

export default addAccount;
