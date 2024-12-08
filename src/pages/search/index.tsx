import  { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NewsCard from "../../components/NewsCard";
import Pagination from "../../shared/Pagination";
import RelatedBox from "../../shared/RelatedBox";
import { useSearchNews } from "../../features/news/searchNews";


const SearchPage = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const searchVal = searchParams.get("val")

  const currentPage = Number(searchParams.get("page")) || 1; 
 
  const { data, isPending: isLoading } = useSearchNews(currentPage);
    
  const onPageChange = (page: number) => {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set("page", String(page)); 
      if (searchVal) {
        params.set("val", searchVal); 
      }
      return params;
    }); 
  };

  useEffect(() => {
    if (currentPage < 1) {
      setSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);
        params.set("page", "1");
        if (searchVal) {
          params.set("val", searchVal); // `searchVal` parametresini koru
        }
        return params;
      });
    }
  }, [currentPage, searchVal, setSearchParams]);
  
  const placeholders = Array.from({ length: 6 });
 
  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <div className="p-4 grid grid-cols-12 gap-5">
      <div className="w-full flex flex-col col-span-12 lg:col-span-9 gap-5 ">
        <div className='flex w-full justify-between items-center  border-b-2 border-b-foreground py-2 mb-2 '>
  <h1 className=" flex items-center text-lg gap-2 italic-h-"><p className="text-2xl md:text-3xl font-semibold">"{searchVal?.toUpperCase()}"</p> <span className="self-end"> teqi ile bağlı nəticələr</span></h1>
  
        </div>
  <div className="grid  gap-10 sm:grid-cols-2 md:grid-cols-3 ">
    {data?.news.map((item,) => (
    <NewsCard
    key={item.id}
    id={item.id}
    category={item.category}
    imageUrl={item.imageUrl}
    title={item.title}
    description={item.description}
    likes={item.like}
    dislikes={item.dislike}
    views={item.views}
    time={item.publishedAt}
  />
    ))}
  </div>
  <Pagination
          totalPages={Number(data?.totalPages)}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
      <div className="lg:col-span-3 col-span-12 ">
     <RelatedBox placeholders={placeholders}/>
      </div>
     
    </div>
  );
};

export default SearchPage;
