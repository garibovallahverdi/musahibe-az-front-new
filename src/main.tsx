import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx' 
// import './utils/i18n/index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from './context/ThemeContext.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 2000,
        },
        error: {
          duration: 2000,
        },
        style: {
          fontSize: "14px",
          maxWidth: "500px",
          padding: "16px 24px",
        },
      }}
    /> 
    </ThemeProvider>

  </React.StrictMode>,
)