import React from 'react';

const Background = () => {
  return (
    <>
      <div className=" overflow-hidden fixed -z-10 flex justify-center h-[calc(100dvh-64px)] w-full ">
        <div className=" absolute top-[60px] md:top-[100px] h-[40%] w-[40%] -z-10 bg-no-repeat bg-center bg-contain bg-[url('/src/assets/home/logo.webp')]"></div>
        <div className=" absolute h-[100%] w-full -z-10 bg-white bg-opacity-95"></div>
      </div>
      <div className="w-full overflow-hidden h-[90px] md:h-[130px]"></div>
    </>
  );
};

export default Background;
