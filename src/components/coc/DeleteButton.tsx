"use client";
import { databases } from "@/app/appwrite";
import { Trash } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <Button>
      <Trash
        size={18}
        className="hover:text-red-500 cursor-pointer"
        onClick={() => {
          databases
            .deleteDocument(
              process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
              process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
              id
            )
            .then(() => {
              console.log("Document deleted successfully");
              window.location.reload();
            });
        }}
      />
    </Button>
  );
};

export default DeleteButton;
