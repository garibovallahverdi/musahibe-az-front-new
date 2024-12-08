import EmotyDataPage from "../../components/EmotyDataPage";
import { useOneNews } from "../../features/news/useOneNews";
import RelatedBox from "../../shared/RelatedBox";

const Reading = () => {
  const placeholders = Array.from({ length: 6 });

  const { data, isPending } = useOneNews();

  if (isPending) {
    return <p>Loading ....</p>;
  }

  if (!data) {
    return <EmotyDataPage placeholders={placeholders}/>
  }

  return (
    <div className="bg-background py-4">
      <div className="w-full grid grid-cols-12 gap-3">
        <div className="lg:col-span-9 col-span-12 bg-backgroundSecond shadow-lg rounded-lg p-6">
          <div className="flex items-center text-sm mb-4">
            <span>Yazar {data.author}</span>
            <span className="mx-2">|</span>
            <span>Published {new Date(data.publishedAt).toDateString()}</span>
          </div>
          <div className="news-detail-content">
            <h1 className="text-xl">{data.title}</h1>
            <p>{data.description}</p>
            <img src={data.imageUrl} alt={data.title} />
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
        <RelatedBox placeholders={placeholders} />
      </div>
    </div>
  );
};

export default Reading;
