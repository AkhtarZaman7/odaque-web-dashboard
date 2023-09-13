"use client";
import React from "react";
//import { ClerkProvider } from "@clerk/nextjs";

export default function AuthLayout({
  children, // will be a page or nested layout
}) {
  return <div>{children}</div>;
}
