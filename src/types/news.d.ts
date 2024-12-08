export interface NewsItem {
    id: string;
    author: string;
    title: string;
    description: string;
    category:string,
    content: string;
    imageUrl: string;
    like:string[];
    dislike:string[];
    views:number;
    publishedAt: string;
  }
  

  export interface PaginatedNewsResponse {
    message: string;
    news: NewsItem[];
    totalCount: number;
    totalPages: number;
    currentPage: number;
  }