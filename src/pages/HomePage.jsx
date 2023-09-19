import { Carousel} from "../components/index";
import { Products } from "./index";



const HomePage = () => {
  return (
    <div className="bg-amazonClone-background">
      <div className="min-w-[1000px] max-w-[15000px] m-auto bg-purple-600">
        <Carousel />
      </div>
    <Products/>
      <div className="mt-4">
        <img src={"../src/assets/images/banner_image.jpg"} alt="" />
      </div>
    </div>
  )
}

export default HomePage;
