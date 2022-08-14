import './styles.css';

const LoadOne = (name: string) => {
  let classProperties;
  switch (name) {
    case 'first':
      classProperties = 'bg-first w-1/4 h-[680px] relative available bg-cover';
      break;
    case 'second':
      classProperties =
        'bg-second w-1/2 h-[330px] relative bg-cover available ml-[20px]';
      break;
    case 'third':
      classProperties =
        'bg-third w-1/4 h-[330px] relative bg-cover available ml-[20px] mt-[10px]';
      break;
    case 'fourth':
      classProperties =
        'bg-fourth w-1/4 h-[330px] relative bg-cover available ml-[20px]';
      break;
    case 'fifth':
      classProperties =
        'bg-fifth w-1/4 h-[330px] relative bg-cover available ml-[20px]';
      break;
    case 'sixth':
      classProperties =
        'bg-sixth w-1/4 h-[330px] relative bg-cover available ml-[20px] mt-[10px]';
      break;
  }
  return (
    <div className={classProperties}>
      {' '}
      <div className="flex justify-center">
        <span className="absolute front-drone text-white not-italic font-bold w-60 bottom-0 pr-3 mb-[100px] left-6">
          LOREM IPSUM DOLOR SIT AMET ADIPISCING ELIT.
        </span>
      </div>
      <div className="flex justify-center">
        <img
          src="/assets/images/line.png"
          className="bottom-0 mb-[80px] absolute w-4/5 items-center left-6"
        />
      </div>
      <div className="flex justify-center w-90 absolute bottom-0 mb-[40px] items-center ml-[20px]">
        <img src="/assets/images/eye.png" className="h-full w-[15px]" />

        <span className="text-[14px] text-white not-italic pl-3">114558</span>

        <img
          src="/assets/images/comment.png"
          className="ml-5 h-full w-[15px]"
        />

        <span className="text-[14px] text-white not-italic pl-3">2408</span>
      </div>
    </div>
  );
};

export default LoadOne;
