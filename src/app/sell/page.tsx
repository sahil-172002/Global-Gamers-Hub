"use client";

import { useState, useTransition } from "react";
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
import { Loader2, X } from "lucide-react";
import addAccount from "@/actions/addAccount";
import uploadImage from "@/actions/uploadImage";

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" className="w-full" disabled={isPending}>
      {isPending ? (
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
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        // Upload images first
        const imageIds = await Promise.all(images.map(uploadImage));
        const validImageIds = imageIds.filter(
          (id): id is string => id !== null
        );

        if (validImageIds.length !== images.length) {
          console.error("Some images failed to upload");
          setError("Some images failed to upload. Please try again.");
          return;
        }

        // Add image IDs to formData
        formData.append("imageIds", JSON.stringify(validImageIds));

        // Now call the server action with the updated formData
        const result = await addAccount(formData);

        if (result.error) {
          setError(result.error);
          toast.error(result.error);
        } else if (result.success) {
          toast.success("Account created successfully!");
          router.push("/coc");
          router.refresh();
        }
      } catch (error) {
        console.error("Error adding account:", error);
        toast.error("An unexpected error occurred");
      }
    });
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Add Account</CardTitle>
          <CardDescription>Enter the account details below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <SubmitButton isPending={isPending} />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
