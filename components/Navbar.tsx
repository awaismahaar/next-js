import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  console.table(user);
  console.log(isUserAuthenticated);

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-5xl text-blue-500 font-bold">
            Blog <span className="text-black">Marshil</span>
          </h1>
        </Link>
        {/* Add your navigation links here */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-lg font-medium hover:text-blue-700 transition-colors duration-300"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium hover:text-blue-700 transition-colors duration-300"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {!isUserAuthenticated ? (
          <>
            <RegisterLink className={buttonVariants()}>Sign In</RegisterLink>
            <LoginLink className={buttonVariants({ variant: "outline" })}>
              Login
            </LoginLink>
          </>
        ) : (
          <LogoutLink>
            <Button variant="destructive">Logout</Button>
          </LogoutLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
