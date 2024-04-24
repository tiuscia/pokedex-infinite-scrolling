const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center mx-auto"> 
      <div className="pokeball w-[50px] h-[50px] overflow-hidden rounded-full relative transition-all ease-in-out duration-300 animate-shake_pokeball">
        <div className="pokeball-top absolute w-[100%] h-[50%] top-0 bg-[#ef4144]"></div>
        <div className="pokeball-middle z-50 top-1/2 w-full h-[10%] absolute bg-[#302d2d] -translate-y-1/2 before:content-[''] before:top-1/2 before:left-1/2 before:z-[99] before:rounded-full before:absolute before:bg-[#ffffff] before:border-[5px] before:border-solid before:border-[#302d2d] before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:h-[20px] before:w-[20px]"></div>
        <div className="pokeball-bottom absolute w-[100%] h-[50%] bottom-0 bg-[#ffffff] z-1"></div>
      </div>
    </div>
    
  );
};

export default Loader
