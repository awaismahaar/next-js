import { handleSubmission } from "@/app/action";
import SubmittingButton from "@/components/SubmittingButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-lg mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>This is a useful card.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-2" action={handleSubmission}>
            {/* form fields */}
            <div className="flex flex-col gap-2">
              <Label>Enter Text</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Enter Text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Enter Content</Label>
              <Textarea name="content" required placeholder="Enter Content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Enter ImageURL</Label>
              <Input
                name="imageUrl"
                required
                type="text"
                placeholder="Enter URL"
              />
            </div>
            <SubmittingButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
