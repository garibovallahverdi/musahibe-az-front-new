import { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import NewsCard from "../../components/NewsCard";
import Pagination from "../../shared/Pagination";
import RelatedBox from "../../shared/RelatedBox";
import { useNewsCategory } from "../../features/news/useNews";

type NewsPageProps = {
  validCategories: string[];
};

const NewsPage: React.FC<NewsPageProps> = ({ validCategories }) => {
  const { category } = useParams<{ category: string }>();

  if (!category || !validCategories.includes(category)) {
    throw new Error("Invalid category");
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1; 

  const { data, isPending: isLoading } = useNewsCategory(currentPage);

  const onPageChange = (page: number) => {
    setSearchParams({ page: String(page) }); 
  };

  const placeholders = Array.from({ length: 6 });

  useEffect(() => {
    if (currentPage < 1) {
      setSearchParams({ page: "1" });
    }
  }, [currentPage, setSearchParams]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || data.news.length === 0) {
    return <p>No news available in this category.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-12 gap-5">
      <div className="w-full flex flex-col col-span-12 lg:col-span-9 gap-5">
        <div className="flex w-full justify-between items-center border-b-2 border-b-foreground py-2 mb-2">
          <h1 className="text-2xl md:text-3xl font-semibold">{category?.toUpperCase()}</h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {data.news.map((item) => (
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

        <Pagination
          totalPages={data.totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>

      <div className="lg:col-span-3 col-span-12">
        <RelatedBox placeholders={placeholders} />
      </div>
    </div>
  );
};

export default NewsPage;
