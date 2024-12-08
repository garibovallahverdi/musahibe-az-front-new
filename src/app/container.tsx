import { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div className='mx-auto  bg-backgroundSecond h-auto'>
      <div className='mx-auto sm:px-6 lg:px-8 xl:px-20 px-4 max-w-[1250px]   h-auto'>
        {children}

      </div>
    </div>
  );
}

export default Container;