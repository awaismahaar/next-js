import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  // for time delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  console.table(user);
  console.log(isUserAuthenticated);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium">
          Dashboard Page - {user?.given_name}
        </h1>
        <div>
          <Link className={buttonVariants()} href={"/dashboard/create"}>
            Create Post
          </Link>
        </div>
      </div>
      <div className="relative h-24 w-24 overflow-hidden">
        <Image
          src={user?.picture as string}
          alt={user?.given_name as string}
          fill
          className="object-cover rounded-full transition-transform duration-300 hover:scale-105"
        />
         </div>
        <div className="mt-4">
          <p>{new Intl.DateTimeFormat("en-US" , {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date())}</p>
        </div>
     
    </>
  );
};

export default Page;
