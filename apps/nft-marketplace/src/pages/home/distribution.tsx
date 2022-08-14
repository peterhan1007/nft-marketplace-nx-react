import React from 'react';

const Distribution = () => {
  const percents = [25, 15, 10, 15, 10, 5];
  const contents = [
    'STAKER',
    'FEATURE INVESTOR',
    'TEAM',
    'LP POOLS',
    'ECO PARTNERS',
    'MKT OPERATION',
  ];

  const setStyle = (percent: number) => {
    return { '--value': Number(percent) } as React.CSSProperties;
  };

  const results = (): JSX.Element => {
    return (
      <>
        {' '}
        {percents.map((percent, id) => (
          <div className="bg-[#1E1E1E]" key={id}>
            <div
              data-theme="mytheme"
              className="percentage font-drone text-3xl w-[200px] h-[200px] radial-progress border-[#DA458F] border-2 border text-navbar bg-primary"
              style={setStyle(percent)}
            >
              <span className="content flex items-center rounded-3xl">
                {percent}%
              </span>
            </div>
            <div className="mt-[25px]">
              <span className="text-center font-drone text-[#FBC625] not-italic font-bold">
                {contents[id]}
              </span>
            </div>

            <div>
              <span className="text-center font-drone text-white not-italic font-bold text-xs">
                $25,000,000
              </span>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="mt-[100px] mb-[100px]">
      <img src="/assets/images/vector-1.png" className="float-right" />
      <img src="/assets/images/vector-2.png" className="float-left pt-[60px]" />
      <img
        src="/assets/images/vector-3.png"
        className="float-right pt-[310px]"
      />
      <img
        src="/assets/images/vector-4.png"
        className="float-left pt-[460px]"
      />

      <span className="flex justify-center items-center text-5xl text-[#FBC625] not-italic font-drone">
        TOKEN DISTRIBUTION
      </span>
      <div className="flex justify-center mt-[40px]">
        <img src="/assets/images/underline.png " />
      </div>
      <div className="mt-[100px] mr-[200px] ml-[200px] grid xl:grid-rows-2 lg:grid-rows-3 grid-flow-col gap-16 text-center pl-5 pt-5">
        {results()}
      </div>
    </div>
  );
};

export default Distribution;
