import { databases, storage } from "@/app/appwrite";
import CocCard from "./CocCard";
import DeleteButton from "./DeleteButton";

const AccountsList = async ({
  showDeleteButton = false,
}: {
  showDeleteButton?: boolean;
}) => {
  const response = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!
  );

  const accountsWithImages = await Promise.all(
    response.documents.map(async (account) => {
      let imageUrls: any = [];
      if (Array.isArray(account.imageIds)) {
        imageUrls = await Promise.all(
          account.imageIds.map(async (imageId) => {
            try {
              const imageUrl = storage.getFileView(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
                imageId
              );
              return imageUrl.href;
            } catch (error) {
              console.error(`Error fetching image ${imageId}:`, error);
              return null;
            }
          })
        );
      }
      return { ...account, imageUrls: imageUrls.filter(Boolean) };
    })
  );

  console.log(accountsWithImages);

  return (
    <div className="flex flex-wrap gap-1 md:gap-4 justify-center">
      {accountsWithImages.map((account: any) => {
        return showDeleteButton ? (
          <div
            key={account.$id}
            className="border border-gray-300  rounded-lg p-4 w-full"
          >
            <p>{account.accountId}</p>
            <p>{account.$createdAt}</p>
            <DeleteButton id={account.$id} />
          </div>
        ) : (
          <CocCard
            key={account.$id}
            tag={account.accountId}
            imageUrls={account.imageUrls}
          />
        );
      })}
    </div>
  );
};

export default AccountsList;
