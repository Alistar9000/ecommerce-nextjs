import AfterSlider from "@/components/Home/AfterSlider"
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Home/Slider"
import Topbar from "@/components/Home/Topbar"

const HomePage = () => {
  return (
    <div className='grow flex flex-col top-[168px] relative gap-y-4 max-w-full shrink-0 items-center'>
      <Topbar className={'lg:block hidden'} />
      <Slider />
      <div className="relative z-10 w-full bg-white ">

      <AfterSlider />  
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32">
      <ProductList />
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32">Categories</h1>
      <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="text-2xl">New Products</h1>
      <ProductList />
      </div>
      </div>
    </div>
  )
}

export default HomePage