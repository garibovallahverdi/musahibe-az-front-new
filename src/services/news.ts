import axios from "axios";
import { NewsItem, PaginatedNewsResponse } from "../types/news";
const PORT = import.meta.env.VITE_PORT;


export async function getNewsByCategory(category: string,currentPage:number): Promise<PaginatedNewsResponse> {
    const res = await axios.get(`${PORT}/api/news/${category}?page=${currentPage}`);
    return res.data as PaginatedNewsResponse;
  }


export async function getNewsById(id:string): Promise<NewsItem> {
    console.log(id);
    
    const res = await axios.get(`${PORT}/api/newsbyid/${id}`)
    console.log(res.data);
    
    return res.data.news
    
}
export async function searchNewsApi(search:string,currentPage:number):Promise<PaginatedNewsResponse>  {

  const res = await axios.get(`${PORT}/api/news?search=${search}&&page=${currentPage}`)
  return res.data
}

export async function reactionToNews (action:string,id:string,userId:string){
  const res = await axios.post(`${PORT}/api/reactiontonews/${id}`, {action,userId})

  return res.status
}

export async function getMainPageCategory(category:string):Promise<PaginatedNewsResponse>{
  const res = await axios.get(`${PORT}/api/mainpagecategory/${category}`)
  console.log(res.data);
  
  return res.data

}