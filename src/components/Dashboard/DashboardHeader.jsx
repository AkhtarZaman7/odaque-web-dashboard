"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/user/actions";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    console.log("the token in dashboard get is: ", token);
  }, []);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
    router.push("/sign-in");
  };
  return (
    <div className="flex h-24 rounded-md bg-white">
      <button className="bg-gray-300" onClick={logout}>
        LOGOUT
      </button>
    </div>
  );
};

export default DashboardHeader;
