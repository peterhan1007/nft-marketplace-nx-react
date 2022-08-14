import playImage from '../../assets/images/play-button.png';

const template = (num: number, color: string, background: string) => (
  <div className={`flex items-center bg-[#${background}]`}>
    <div
      className={`flex items-center justify-center font-drone text-4xl text-[#${color}] w-[10rem]`}
    >
      {num}
    </div>
    <div
      className={`mt-3 font-inter text-4xl text-[#${color}] text-[16px] leading-6 width-8/10`}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laborisfds.
    </div>
  </div>
);

const Play = () => {
  return (
    <div className="xl:grid xl:grid-cols-2 xl:gap-2 px-[160px]">
      <div className="bg-[url('/assets/images/play.png')] bg-cover sm: h-[400px] relative">
        <div className="flex bg-[#2A282F] ">
          <div className="blur flex items-center justify-center font-drone text-4xl text-[#17161A] absolute w-[10rem] bottom-0 w-[133px] bg-[#FBC625]/[.13] h-[133px] backdrop-blur-xl"></div>
          <img
            src={playImage}
            className="absolute bottom-[47px] left-[56px] z-10"
          ></img>
          <div className="text-[#FFFFFF] text-[32px] pr-7 pt-6 font-inter text-4xl text-[#89888B] width-9/10 text-[16px] leading-6 absolute bottom-0 bg-[#000000]/[.7] w-full h-[133px] text-right ">
            <p className="font-drone">LET'S PLAY WITH US!</p>
            <button className="pt-1 pr-6 play-game mt-4 pl-[20px]">
              PLAY GAME
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col text-[black] min-height">
        <div className="flex items-center bg-[#FBC625] ">
          {template(1, '17161A', 'FBC625')}
        </div>

        <div className="flex bg-[#3D3B44] items-center">
          {template(2, 'D6D6D6', '3D3B44')}
        </div>

        <div className="flex bg-[#2A282F] items-center">
          {template(3, '89888B', '2A282F')}
        </div>
      </div>
    </div>
  );
};

export default Play;
