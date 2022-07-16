import React from 'react';

type Props = {
  children: React.ReactNode;
};

function WrapperMemorized(props: Props) {
  const { children } = props;
  // RENDER
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="p-5 bg-white rounded-2xl w-[400px] shadow">{children}</div>
    </main>
  );
}

export const Wrapper = React.memo(WrapperMemorized);
