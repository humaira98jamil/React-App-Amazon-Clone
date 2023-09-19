import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div>
      <div className="w-full bg-white m-auto py-10 divide-y  divide-gray-400">
        <div className="w-64 m-auto flex flex-col gap-3">
          <div>See Personalized recommendations</div>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 p-2 rounded-md font-semibold  ">
            Sign in
          </button>
          <div className="m-auto">
            <p className="text-sm ">
              New Customer?
              <a href="#" className="text-blue-600 ml-1 hover:underline">
                Start here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <div className="w-full flex items-center justify-center p-4 bg-amazonClone text-white text-semibold hover:bg-amazon-blue">
          Back to Top
        </div>
      </Link>
    </div>
  );
};

export default FooterTop;
