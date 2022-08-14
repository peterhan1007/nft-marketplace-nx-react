import CustomButton from '../../components/button/CustomButton';
import ScrollButton from '../../components/button/ScrollButton';

const IntroTemplate = () => (
  <div>
    <p className="font-drone font-bold text-xl leading-8">$999.000</p>
    <p className="font-inter text-yellow font-medium text-sm pt-2">
      Active Shoulders
    </p>
  </div>
);

const Intro = () => {
  return (
    <>
      <div className="main-back flex items-center">
        <div className="max-w-[590px] px-2 lg:px-6 lg:px-8 max-w-7xl xl:ml-[320px]">
          <div>
            <h3 className="font-drone title-40-text text-yellow">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </h3>
            <p className="paragraph-text pt-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="flex justify-between pt-10">
              <IntroTemplate />
              <IntroTemplate />
              <IntroTemplate />
              <IntroTemplate />
            </div>
          </div>
          <div className="flex pt-20">
            <div className="pr-5">
              <CustomButton label="PLAY GAME" padding="py-[18px] px-[54px]" />
            </div>
            <div>
              <CustomButton
                model="secondary"
                label="LEARN MORE"
                padding="py-[18px] px-[54px]"
              />
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </>
  );
};

export default Intro;
