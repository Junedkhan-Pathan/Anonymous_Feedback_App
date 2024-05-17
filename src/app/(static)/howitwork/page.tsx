import React from "react";

const HowItWork = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            STEPS
          </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-400">
            How it <span className="text-gray-700">Works?</span>
          </h3>
        </div>

        <div className="mt-20">
          <ul className="">
            <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-700 text-white border-4 border-white text-xl font-semibold">
                    1
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">
                    Create Account
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    create your account first 
                  </p>
                </div>
              </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-700 text-white border-4 border-white text-xl font-semibold">
                    2
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">
                    Verify your account 
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                   we will send you email of verification code you have to just verify your account with that code.
                  </p>
                </div>
              </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-700 text-white border-4 border-white text-xl font-semibold">
                    3
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">
                    Sign in 
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    sign in with your email and explore the advanthure of annoymous feedback
                  </p>
                </div>
              </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-700 text-white border-4 border-white text-xl font-semibold">
                    4
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">
                    Share your url
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    share your url to freind,collegues,relative or public so you can get feedback
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
