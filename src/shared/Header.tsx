import { useEffect, useRef, useState } from "react";
import Container from "../app/container";
import { NavLink } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import ThemeToggleButton from "../components/ThemeToggleButton";
import BurgerMenuIcon from "../components/BurgerMenuIcon";
import SearchInput from "../components/Search";
import TagComponent from "../components/TagComponent";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  

  const menuItems = [
    { title: "Ana Səhifə", link: "/" },
    { title: "Xəbərlər", link: "/xeberler" },
    { title: "Siyasət", link: "/siyaset" },
    { title: "İqtisadiyyat", link: "/iqtisadiyyat" },
    { title: "Texnologiya", link: "/texnologiya" },
    { title: "Mədəniyyət", link: "/medeniyyet" },
    { title: "İdman", link: "/idman" },
    { title: "Əlaqə", link: "/elaqe" },
  ];

 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Container>
      <nav ref={navRef} className="w-full py-4 px-2 select-none">
        <div className="flex flex-col w-full space-y-2 items-center mx-auto relative">
          <div className="flex justify-between items-start w-full">
            <p className="text-[10px] italic space-x-4 items-center hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>

              <span className="self-start">Cümə 12 Dekabr, 2024</span>
            </p>
            <p className="text-lg sm:text-2xl font-bold uppercase text-[#6db6ff] self-center sm:self-end">
              müsahibə<span className="text-blue-500">.</span>az
            </p>
            <div className="sm:flex space-x-4 items-center hidden">
           
              <SearchInput/>
              <ThemeToggleButton />
              
            </div>

            {/* Hamburger menu icon */}
            <BurgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="w-full mx-auto sm:border-b-[1px] sm:border-foreground py-2">
            <ul className="mx-auto w-[90%] hidden sm:flex justify-center space-x-4 lg:space-x-6 text-[12px] md:text-base">
              {menuItems.map((item, index) => (
                <li key={index} className="cursor-pointer w-fit">
                  <NavLink
                    to={index === 0 ? `${item.link}` : `/news${item.link}`}
                    className={({ isActive }) =>
                      `transition-all w-fit text-nowrap ${
                        isActive
                          ? "text-blue-500 font-bold"
                          : "text-foreground hover:text-blue-500"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobil menü */}
          <MobileMenu menuItems={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />
         
         <TagComponent/>

        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
