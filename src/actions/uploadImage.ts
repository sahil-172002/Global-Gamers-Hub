import { Client, ID, Storage } from "appwrite";

export const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

const uploadImage = async (file: File) => {
  try {
    const storage = new Storage(client);
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET!,
      ID.unique(),
      file
    );
    return response.$id;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

export default uploadImage;
