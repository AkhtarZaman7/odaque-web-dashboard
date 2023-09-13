import React from 'react';
import { UserProfile } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata = {
  title: 'User profile',
  description: 'Seamlessly sign in to your account with our user-friendly login process.',
};

const UserProfilePage = () => (
  <div className="my-6 -ml-16">
    <UserProfile />
  </div>
);

export default UserProfilePage;