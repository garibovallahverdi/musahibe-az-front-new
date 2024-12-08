import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import SearchInput from './Search';

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  }

const BurgerMenuIcon = ({setIsOpen, isOpen}:MobileMenuProps) => {
  return (
    <div className=" sm:hidden flex gap-3 items-center">
      <SearchInput/>
      
    <ThemeToggleButton/>


     <button className="" onClick={()=>setIsOpen(!isOpen)}>
       {
         !isOpen?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
      : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
       }

     </button>
    </div>
  )
}

export default BurgerMenuIcon