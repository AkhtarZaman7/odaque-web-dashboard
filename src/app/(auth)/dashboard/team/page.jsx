import React from 'react';
export const metadata = {
  title: 'Team',
  description: 'Team',
  icons: [
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

const Team = () => (
  <div className="content">
    <p>teams</p>
  </div>
);

export default Team;