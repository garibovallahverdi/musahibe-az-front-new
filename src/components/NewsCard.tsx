import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import getUserId from "../utils/generateUUID";
import {  useState } from "react";
import { reactionToNews } from "../services/news";


const generateSlug = (title:string) => {
  return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};

type NewsCardListProps = {
  id:string
  imageUrl: string; 
  category: string;
  title: string;
  description: string;
  likes: string[];
  dislikes: string[];
  views: number;
  time: string;
}
const NewsCard:React.FC<NewsCardListProps>  = ({id, imageUrl, category,title, description, likes, dislikes, views, time }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
      
  const [likeState,setLikeState] = useState<string[]>([...likes])
  const [dislikeState,setDislikeState] = useState<string[]>([...dislikes])

      const slug = generateSlug(title)

      const userId = getUserId()

      const likeNews = async () => {
        // Kullanıcıyı beğeniler listesine ekle, beğenmediklerinden çıkar
        if(!likeState.includes(userId)){
          const action = "like"
          const res =  await reactionToNews(action, id ,userId)
          if(res == 200){

            setLikeState((prevLikes) => [...prevLikes, userId]);
            setDislikeState((prevDislikes) => prevDislikes.filter((id:string) => id !== userId));
          }
        }
      };
      
      const dislikeNews = async () => {
        // Kullanıcıyı beğenmedikler listesine ekle, beğenilerden çıkar
        if(!dislikeState.includes(userId)){
           const action = "dislike"
          const res =  await reactionToNews(action, id ,userId)
           
           if(res == 200){
             setLikeState((prevLikes) => prevLikes.filter((id:string) => id !== userId));
             setDislikeState((prevDislikes) => [...prevDislikes, userId]);
            }
        }
      };

  return (
   
    <div
    ref={ref}
    className={`max-w-sm  mx-auto relative h-[400px] flex flex-col justify-between pb-3  bg-cardBg  rounded-lg shadow-md overflow-hidden 
        ${inView ? "card-animate" : ""}`}
      >      
    <div className="w-full h-1/2   flex justify-center items-center  relative rounded-lg">
      <img src={imageUrl} alt={title} className="w-full h-full   object-fill" />
    <div className="w-full h-full top-0 absolute rounded-lg cursor-pointer bg-[#00000070]"></div>

    </div>
      <div className="p-4 flex flex-col w-full  h-fit  ">
      <div className="flex items-center gap-2 justify-between  text-xs my-1 border-b-black py-1 border-b">
        <div className="flex gap-2 items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          <span>{new Date(time).toDateString()}</span>
        </div>
        <span className="w-max text-[9px] text-white font-medium block rounded-xl px-2 self-end uppercase bg-buttonBg">{category}</span>
        </div>
        <Link
         to={`/reading/${slug}-?item=${id}`}
         className="block group" 
           >
        <h2 className="text-[16px] transition-all text-cardText group-hover:text-teal-400 font-semibold line-clamp-2">{title}</h2>
        <p className="text-[11px] text-balance text-cardText  mt-2 line-clamp-3">{description}</p>
        </Link>

        
        
      </div>

      <div className="flex w-[90%] items-center justify-between mx-auto text-sm mt-2  ">

          <button onClick={likeNews} className={`${likeState.includes(userId)?"text-blue-400 cursor-default ":" cursor-pointer hover:text-blue-400"} flex items-center gap-2 transition-all  `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>

            <span>{likeState.length}</span>
          </button>
          <button onClick={dislikeNews} className={`${dislikeState.includes(userId)?"text-blue-400 cursor-default ":" cursor-pointer hover:text-blue-400"} flex items-center gap-2 transition-all  `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>

            <span>{dislikeState.length}</span>
          </button>
          <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>

            <span>{views}</span>
          </div>
        </div>
    </div>

  );
};

export default NewsCard