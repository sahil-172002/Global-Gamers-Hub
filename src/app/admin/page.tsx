import { redirect } from "next/navigation";
import { verifyAdminToken } from "@/lib/adminAuth";
import AddAccount from "./_components/AddAccount";
import AccountsList from "@/components/coc/AccountsList";

export default function AdminAddAccountPage() {
  const isAdmin = verifyAdminToken();

  if (!isAdmin) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen p-4 md:p-8 md:flex space-y-4">
      <div className="flex-1">
        <AddAccount />
      </div>
      <div className="flex-1">
        <AccountsList showDeleteButton />
      </div>
    </div>
  );
}
