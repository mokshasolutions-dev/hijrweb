type pagebannerProps = {
  title: string;
  className?: string;
};

const PageBanner = ({ title, className }: pagebannerProps) => {
  return (
    <>
      <div
        className={`relative w-full h-[40vh] bg-[url(/page-banner.jpg)] bg-cover bg-center bg-no-repeat
           ${ className || ""}`}
      >
        <div className="absolute inset-0  z-0" />
        <div className="relative z-10 flex items-center justify-center h-full ">
          <h1 className="text-white text-3xl text-center md:text-5xl   font-bold font-poppins tracking-widest ">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};
export default PageBanner;
