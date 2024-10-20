"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function createSession(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      error: "Please fill out all fields",
    };
  }

  // Get account instance
  const { account } = await createAdminClient();

  try {
    //  Generate session
    const session = await account.createEmailPasswordSession(email, password);

    // Create cookie
    cookies().set("appwrite-session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });

    revalidatePath("/", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Authentication Error: ", error);
    return {
      error: "Invalid Credentials",
    };
  }
}

export default createSession;
