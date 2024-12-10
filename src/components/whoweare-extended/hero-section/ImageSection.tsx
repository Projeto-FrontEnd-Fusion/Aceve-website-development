import { Button } from "@/components/button/GlobalButton";


type ImageSectionProps = {
  data: {
    imgSrc: string;
    imgAlt?: string;
    imgSubTitle: string;
    action: string;
    altImg: string
  };
}
const ImageSection = ({data} : ImageSectionProps) => {
  return (
    <div
      className="w-full
        tablet:w-[70%] tablet:flex tablet:flex-col tablet:items-center"
    >
      <div
        className="flex flex-col items-center 
        mobileLarger:px-20
        tablet:pt-10
        laptop:pt-0"
      >
        <img
          src={data.imgSrc}
          alt={data.altImg}
          title={data.imgAlt}
          className="w-full shadow-lg rounded-lg h-48 
            tablet:h-[304px]
            xl:max-w-[470px] 
          "
        />
        <p className="hidden tablet:block text-center text-sm italic font-roboto mt-2">
          {data.imgSubTitle}
        </p>
      </div>

      <div className="hidden tablet:block tablet:mt-6 ">
        <Button Background="purple" size="small" fontColor="white">
          {data.action}
        </Button>
      </div>
    </div>
  );
};

export default ImageSection;