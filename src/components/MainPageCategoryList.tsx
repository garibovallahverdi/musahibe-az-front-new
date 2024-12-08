import { useMainPageCategory } from '../features/news/mainPageCategory';
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'

type MainPageCategoryListProps = {
  category: string;      
};
const MainPageCategoryList:React.FC<MainPageCategoryListProps> = ({ category }) => {
  const {data} = useMainPageCategory(category)

  
  
  return (

    <div className="w-full flex flex-col gap-5 ">
        <div className='flex w-full justify-between items-center  border-b-2 border-b-foreground py-2 mb-2 '>
  <h1 className="text-2xl md:text-3xl font-semibold ">{category.toUpperCase()}</h1>
   <Link to="#" className='font-light flex items-center gap-2 cursor-pointer  text-sm'>Hamsına bax <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
 </Link>
        </div>
  <div className="grid  gap-8 sm:grid-cols-2 md:grid-cols-3 ">
  {data?.news.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              category={category}
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
      </div>
  )
}

export default MainPageCategoryList