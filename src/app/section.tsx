import { ReactNode } from 'react';

function Section({ children }: { children: ReactNode }) {
  return (
    <div className='mx-auto sm:px-6 max-w-[1250px]   lg:px-8 xl:px-20 px-4  h-auto'>
        {children}
    </div>
  );
}

export default Section;