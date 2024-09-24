import { client } from "@/app/appwrite";
import { Databases, Query } from "appwrite";



export const getData = () => {
    const databases = new Databases(client);

let promise = databases.listDocuments(
    "66f26c39002ac001252c",
    "66f26c420029ab42029f",
    [
        Query.select([])
    ]
);

promise.then(function (response) {
    console.log(response);
    return response;
}, function (error) {
    console.log(error);
});
  
};