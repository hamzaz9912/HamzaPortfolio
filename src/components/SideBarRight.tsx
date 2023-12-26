import { Link } from "react-router-dom";
import { sideBarRightMail } from "../assets/lib/data";
import React from "react";

const SiteBarLeft: React.FC = () => {
  return (
    <div className="absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[50vh] max-lg:hidden ">
      <div className=" h-[65%] w-[4rem] flex items-center justify-center ">
        <Link
          to={sideBarRightMail.link}
          className=" text-gray-700 mb-2 [writing-mode:vertical-lr] absolute top-0 right-0  h-[50%] text-[--orange] hover:text-[--lightblue] transition-all duration-200 "
        >


             <div className=" w-[0.25rem] h-[100%] bg-[--green]"></div>
              <div >
              
              <svg width={"40px"} enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" ><g id="_x36__stroke"><g id="WhatsApp"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path clip-rule="evenodd" d="M46.114,32.509    c-1.241-2.972-2.182-3.085-4.062-3.161c-0.64-0.037-1.353-0.074-2.144-0.074c-2.446,0-5.003,0.715-6.546,2.295    c-1.88,1.919-6.545,6.396-6.545,15.576c0,9.181,6.695,18.06,7.598,19.303c0.941,1.24,13.053,20.354,31.86,28.144    c14.707,6.095,19.071,5.53,22.418,4.816c4.89-1.053,11.021-4.667,12.564-9.03c1.542-4.365,1.542-8.09,1.09-8.88    c-0.451-0.79-1.693-1.24-3.573-2.182c-1.88-0.941-11.021-5.456-12.751-6.058c-1.693-0.639-3.31-0.413-4.588,1.393    c-1.806,2.521-3.573,5.08-5.003,6.622c-1.128,1.204-2.972,1.355-4.514,0.715c-2.069-0.864-7.861-2.898-15.008-9.256    c-5.53-4.928-9.291-11.06-10.381-12.904c-1.091-1.881-0.113-2.973,0.752-3.988c0.941-1.167,1.843-1.994,2.783-3.086    c0.941-1.091,1.467-1.655,2.069-2.935c0.64-1.241,0.188-2.521-0.263-3.462C51.418,45.414,47.657,36.233,46.114,32.509z M63.981,0    C28.699,0,0,28.707,0,63.999c0,13.996,4.514,26.977,12.187,37.512L4.212,125.29l24.6-7.862C38.93,124.125,51.004,128,64.019,128    C99.301,128,128,99.291,128,64.001c0-35.292-28.699-63.999-63.981-63.999h-0.037V0z" fill="#67C15E" fill-rule="evenodd" id="WhatsApp_1_"/></g></g></svg>
    </div>

          {sideBarRightMail.text}
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col h-[70%] ">
        <div className=" w-[0.25rem] h-[100%] bg-[--lightblue]"></div>
      </div>
    </div>
  );
};

export default SiteBarLeft;
