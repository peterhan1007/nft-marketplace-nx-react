import LoadOne from '../../components/news';

const News = () => {
  return (
    <div className="container mx-auto">
      <span className="flex mb-[100px] justify-center items-center text-5xl text-[#FBC625] not-italic font-drone">
        SEARCH THE NEWS
      </span>
      <div className="flex justify-center mt-[-80px] mb-[60px]">
        <img src="/assets/images/underline.png " />
      </div>
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="row-span-2">{LoadOne('first')}</div>
        <div className="row-span-1 col-span-1">{LoadOne('second')}</div>
        <div className="col-span-2">{LoadOne('third')}</div>
        <div className="col-span-1">{LoadOne('fourth')}</div>
        <div className="col-span-1">{LoadOne('fifth')}</div>
        <div className="col-span-1">{LoadOne('sixth')}</div>
      </div>
    </div>
  );
};

export default News;
