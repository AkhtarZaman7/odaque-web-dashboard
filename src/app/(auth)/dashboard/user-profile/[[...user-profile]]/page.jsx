import React from 'react';
import { UserProfile } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata = {
  title: 'User profile',
  description: 'Seamlessly sign in to your account with our user-friendly login process.',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};



const UserProfilePage = () => (
  <div className="my-6 -ml-16">
    <UserProfile />
  </div>
);

export default UserProfilePage;