import { useSelector } from "react-redux";
import { MagnifyingGlassIcon, MapPinIcon, ShoppingCartIcon,Bars3Icon  } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";




const Navbar = () => {
  const cart = useSelector((store) => store.amazonReducer.productsNumber);

 
  return (
    <header className="min-w-[1000px] sticky top-0 z-50 ">
      <div className="flex bg-amazonClone  text-white h-[60px]">
        {/* left section */}

        <div className="flex items-center   m-4">
          <Link className="headerHover" to="/">
            <img
              className="h-[35px] m-auto ml-2  "
              src="../src/assets/images/amazon.png"
            />
          </Link>
          <div className=" flex md:pr-4 pl-2 md:pl-4">
            <div>
              <MapPinIcon className="w-8 mt-1 mr-1 hidden mdl:inline-flex" />
            </div>
            <div className=" headerHover">
              <div className="text:xs xl:text-sm">Deliver to</div>
              <div className="text:sm xl:text-base font-bold">
                United States
              </div>
            </div>
          </div>
        </div>

        {/* middle section */}

        <div className="lgl:flex grow relative items-center">
          <div className="w-[100%]">
            <div className="hidden lgl:flex items-center h-10 bg-amazonClone-yellow rounded  ">
              <select className=" p-2 bg-gray-300 text-black border text:xs xl:text-sm outline-none">
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
              </select>
              <input
                className="flex grow items-center h-[100%] rounded-l text-black outline-none"
                type="text"
              />
              <button className="w-[45px]">
                <MagnifyingGlassIcon className="h-[27px] m-auto  stroke-slate-900 " />
              </button>
            </div>
          </div>

          {/* right section */}

          <div className="flex gap-1 items-center m-4 ">
            <div className="hidden xl:inline-block gap-3 pr-4 md:pl-4  headerHover ">
              <div className="text:xs xl:text-sm  ">Hello, Sign in</div>
              <div className="text:sm xl:text-base font-bold pr-4 ">
                Accounts & Lists
              </div>
            </div>

            <div className="hidden lgl:inline-block md:pr-4 pl-2 md:pl-4   headerHover">
              <div className="text:xs xl:text-sm">Returns</div>
              <div className="text:sm xl:text-base font-bold">& Orders</div>
            </div>

            <Link className="flex pl-3 headerHover" to="/Checkout">
              <div>
                <ShoppingCartIcon className="h-[45px] " />
              </div>
              <div className="relative">
                <div className="absolute font-bold text-orange-400 bottom-[4px] top-2 right-3.5">
                  {cart}
                </div>
              </div>

              <div className="mt-7 text:xs xl:text-sm font-bold ">Cart</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-amazonClone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6  ">
        <div className="flex items-center space-x-2">
          <div>
            <Bars3Icon className="h-6" />
          </div>
          <div>All</div>
        </div>
        <div className=" headerHover hidden md:inline-flex ">
          Todays's Deals
        </div>
        <div className=" headerHover hidden md:inline-flex ">
          Customer Service
        </div>
        <div className=" headerHover hidden md:inline-flex ">Registry</div>
        <div className=" headerHover hidden md:inline-flex ">Gift cards</div>
        <div className=" headerHover hidden md:inline-flex ">Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
