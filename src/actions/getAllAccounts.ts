"use server";

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllAccounts() {
  try {
    const { databases } = await createAdminClient();

    // Fetch accounts from the database
    const { documents: accounts } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ACCOUNTS as string
    );

    // Revalidate the cache for this path
    revalidatePath("/coc", "layout");

    return accounts;
  } catch (error) {
    console.log("Failed to get accounts", error);
    redirect("/error");
  }
}

export default getAllAccounts;
