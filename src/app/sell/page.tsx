"use client";

import { useEffect, useTransition } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import addAccount from "@/actions/addAccount";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Saving...
        </>
      ) : (
        "Save Account"
      )}
    </Button>
  );
}

export default function AddAccountPage() {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(addAccount, {
    error: null,
    success: false,
  });

  const router = useRouter();

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      console.log("Account created successfully!");
      startTransition(() => {
        // router.push("/coc");
        window.location.href = "/coc";
      });
    }
  }, [state, router]);

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Add Account</CardTitle>
          <CardDescription>Enter the account details below</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="accountId">Account ID</Label>
              <Input
                type="text"
                id="accountId"
                name="accountId"
                placeholder="Enter account ID"
                required
              />
            </div>
            {state.error && (
              <Alert variant="destructive">
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
