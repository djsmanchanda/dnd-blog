import Button from "~/components/button";
import Input from "~/components/input";
import { getUserEmail, login } from "~/utils/session.server";
import { Form, Link } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

// TODO: Using a loader function to check if the user is already logged in

// TODO: Using an action function to handle user login

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-7">
      <div className="flex flex-col items-center gap-7">
        {/* TODO: Build the login UI using Form, Input, and Button components */}
      </div>
    </main>
  );
}
