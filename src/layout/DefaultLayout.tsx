import React from 'react';

type DefaultLayoutProps = {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="bg-neutral w-full pb-5 md:pb-10 lg:pb-12 relative">
      {children}
    </div>
  );
};

export default DefaultLayout;