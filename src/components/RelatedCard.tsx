
type RelatedCardListProps = {
  title: string;       
}

const RelatedCard:React.FC<RelatedCardListProps> = ({  title }) => {

    
  return (
    <div
    className={`max-w-sm p-2 gap-3 group items-center mx-auto relative bg-backgroundSecond rounded-lg shadow-md overflow-hidden flex` }>   
      {/* <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5ld3xlbnwwfHx8fDE2ODAwNTA1NjE&ixlib=rb-1.2.1&q=80&w=1080" alt={title}
       className="  w-2/5 h-3/5  object-cover" /> */}

      <div className="flex flex-col gap-2 cursor-pointer">
        <div className="flex justify-between">
        <span className="text-[9px]">Bu gun 16:20</span>
          <div className="flex items-center text-[9px] gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <span>220</span>
          </div>
        </div>
        <h2 className="text-[12px] group-hover:text-primary transition-all font-semibold line-clamp-3">{title}</h2>
        {/* <span className="w-max text-[10px] text-white font-medium block rounded-xl px-1 self-end uppercase bg-teal-400">Siyasət</span> */}
        </div>
      </div>
  );
};

export default RelatedCard;
