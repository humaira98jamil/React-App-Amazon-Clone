import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";


const Products = () => {
const data = useLoaderData()
const productData = data.data;
const dispatch = useDispatch();

 

  return (
    <div className="m-auto grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {productData.map((item) => (
        <div key={item.id} className=" h-auto bg-white ">
          <div>
            <div className="text-lg xl:text-xl font-semibold ml-4 mt-4 flex text-center justify-center">
              {item.title.substring(0, 27)}
            </div>
          </div>
          <div className="m-4 mb-10 ">
            <img
              className="h-64 w-60 object-contain p-4 m-auto "
              src={item.image}
              alt="product-img"
            />
            <div className="">
              <span className="text:xs capitalize italic text-gray-500 ">
                {item.category}
              </span>
            </div>
          </div>
          <div className="px-4 ">
            <div className="flex item-center justify-between mt-4 mb-4">
              <button
                onClick={() =>dispatch(addToCart({id: item.id,
                      title: item.title,
                      description: item.description,
                      price: item.price,
                      category: item.category,
                      image: item.image,
                      quantity: 1,
                    })
                  )
                }
                className="w-full bg-yellow-400 border:yellow-500 hover:bg-yellow-500 font-medium rounded-md py-1.5 "
              >
                Add To Cart
              </button>
              <div className="text-sm xl:text-sm px-2 pt-2">${item.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );


};

export default Products;
