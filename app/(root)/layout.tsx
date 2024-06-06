import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "RoomVc",
  description: "Video calling app created by Arpan",
  icons: {
    icon: '/icons/logo.svg'
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        
      </StreamVideoProvider>
      

    </main>
  );
}

export default RootLayout;
