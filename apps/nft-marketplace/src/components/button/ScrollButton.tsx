import './style.css';

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    });
  };

  return (
    <div className="justify-center absolute bottom-[100px] left font-inter mt-[30px]">
      <button onClick={scrollToTop} className="text-[16px">
        Scroll down
      </button>
      <div>
        <img src="/assets/images/below.png" className="ml-[35px] mt-[20px]" />
      </div>
    </div>
  );
};

export default ScrollButton;
