import { NavLink } from "react-router-dom";

interface MobileMenuProps {
  menuItems: { title: string; link: string }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ menuItems, isOpen, setIsOpen }: MobileMenuProps) => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={` ${
        !isOpen
          ? `-translate-x-full transition-all`
          : `translate-x-0 transition-all`
      }  sm:hidden flex flex-col  w-[calc(100vw-15px)] px-8 z-[999]  absolute h-screen bg-background top-10`}
    >
      <ul className=" w-full  flex flex-col  text-[12px] text-2xl">
        {menuItems.map((item, index) => (
          <li
            onClick={() => setIsOpen(false)}
            key={index}
            className="cursor-pointer hover:text-blue-500 transition-all w-fit"
          >
            <NavLink
              to={index === 0 ? `${item.link}` : `/news${item.link}`}
              className={
                `transition-all w-fit text-foreground hover:text-blue-500`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
