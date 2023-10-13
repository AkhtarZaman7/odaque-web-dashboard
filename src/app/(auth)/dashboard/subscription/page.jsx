import React from "react";
import AppIcons from "../../../../../public/assets/icons";
import SubscriptionDisplay from "../../../../components/SubscriptionDisplay"
export const metadata = {
  title: "Subscription",
  description: "Subscription",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const Subscription = () => (
  <div className="content">
    <SubscriptionDisplay/>
   
  </div>
);

export default Subscription;
