"use client";
import React, { useState } from "react";
import { databases, ID, storage } from "@/app/appwrite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Form = () => {
  const [accountId, setAccountId] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const addAccount = async (accountId: string, imageIds: string[]) => {
    try {
      const response = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        ID.unique(),
        { accountId, imageIds }
      );
      return response;
    } catch (error) {
      console.error("Error adding account:", error);
      return { error: "Failed to add account" };
    }
  };

  const uploadImage = async (file: File) => {
    try {
      const response = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
        ID.unique(),
        file
      );
      return response.$id;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages((prevImages) => [
        ...prevImages,
        ...Array.from(e.target.files!),
      ]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountId || images.length === 0) return;

    const imageIds = await Promise.all(images.map(uploadImage));
    const validImageIds = imageIds.filter((id): id is string => id !== null);

    if (validImageIds.length !== images.length) {
      console.error("Some images failed to upload");
      return;
    }

    const response = await addAccount(accountId, validImageIds);
    console.log(response);

    window.location.reload();
  };

  return (
    <>
      <Card className="w-full max-w-sm mx-auto p-6">
        <CardHeader> Add Account</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Account ID"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              className="w-full"
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
              multiple
            />
            <div className="flex flex-wrap gap-2">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            <Button type="submit" className="w-full">
              Add Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Form;
