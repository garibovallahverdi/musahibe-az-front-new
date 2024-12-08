import { Link } from "react-router-dom";


function ErrorPage() {
  return (
    <div className="mt-40 mx-5 mb-20 grid grid-cols-1 md:grid-cols-auto-fit md:min-w-[32.5rem] md:grid-cols-[repeat(auto-fit,minmax(32.5rem,1fr))]">
      <div className="display__img">
        <img src='https://raw.githubusercontent.com/arunpariyar/404-page/86096ecec1b535b4e9281d5c734c5eae6fecf585/src/assets/Scarecrow.png' alt="404-Scarecrow" className="w-full" />
      </div>
      <div className="md:ml-20">
        <h2 className="text-2xl leading-tight md:text-6xl sm:text-4xl">I have bad news for you</h2>
        <p className="mt-6 font-mono text-2xl font-normal leading-loose sm:text-xl sm:w-full">
          The page you are looking for might be removed or is temporarily unavailable
        </p>
        <Link to="/" className="inline-block mt-6 underline underline-offset-8 hover:text-blue-400 transition-all ">Back to homepage</Link>
      </div>
    </div>
  );
}

export default ErrorPage;