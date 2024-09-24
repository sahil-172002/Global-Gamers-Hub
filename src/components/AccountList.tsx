"use client";
import { databases } from "@/app/appwrite";
import { Account } from "@/types/types";
import { Query } from "appwrite";
import React from "react";
import { useState, useEffect } from "react";
import AccountCard from "./AccountCard";
const AccountList = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        [Query.orderDesc("$createdAt"), Query.limit(3)]
      );
      console.log(response.documents);
      setAccounts(response.documents as unknown as Account[]);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };
  return (
    <div className="my-12 mx-4">
      <h1 className="text-4xl text-center my-8">Premium Accounts</h1>
      <section className="flex justify-center items-center flex-wrap gap-4 my-4 ">
        {[...accounts, ...accounts, ...accounts].map((account, index) => (
          <AccountCard account={account} key={index} />
        ))}
      </section>
    </div>
  );
};

export default AccountList;
