import getAllAccounts from "@/actions/getAllAccounts";
import CocCard from "@/components/coc/CocCard";
import { constructFilePreviewUrl } from "@/lib/utils";
import { Shield } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { game: string } }) {
  const accounts = await getAllAccounts();
  if (params.game == "coc") {
    return (
      <>
        <div className="min-h-screen ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <div className="inline-block p-2 rounded-full mb-4">
                <Image
                  src="/coc-logo.png"
                  alt="Clash of Clans"
                  width={200}
                  height={100}
                  className="rounded-lg  "
                />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Clash of Clans - Accounts
              </h1>
              <p className="text-lg md:text-xl">
                Premium Clash of Clans Accounts
              </p>
            </div>

            {accounts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {accounts.map((account) => {
                  const imageUrls = account.images.map((imageId: string) =>
                    constructFilePreviewUrl(imageId)
                  );
                  return (
                    <div
                      key={account.$id}
                      className="transform transition duration-500 hover:scale-105"
                    >
                      <CocCard tag={account.accountId} imageUrls={imageUrls} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center bg-white rounded-lg shadow-md p-8">
                <p className="text-xl text-gray-600">
                  No Accounts available at the moment
                </p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  //add more games here
  //   if (params.game == "cr") {
  //     return <div>CR</div>;
  //   }

  return notFound();
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
