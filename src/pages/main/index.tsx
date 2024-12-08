import HeroSection from "../../components/HeroSection";
import RelatedBox from "../../shared/RelatedBox";
import MainPageCategoryList from "../../components/MainPageCategoryList";

const MainPage = () => {
  
  const placeholders = Array.from({ length: 6 });
  


  return (
    <div className="w-full  grid ">
      <HeroSection />
      <div className="grid grid-cols-12 gap-8  py-10 ">
      <div className="flex flex-col gap-10  bg- p-2 rounded-lg col-span-12  lg:col-span-9">

      <MainPageCategoryList category="xeberler"/>
      <MainPageCategoryList  category="siyaset"/>
      <MainPageCategoryList category="biznes"/>
      <MainPageCategoryList  category="turizm"/>
      <MainPageCategoryList  category="medeniyyet"/>
      <MainPageCategoryList  category="texnologiya"/>
     





    </div>


       <RelatedBox placeholders={placeholders}/>
      </div>
    </div>
  );
};

export default MainPage;
