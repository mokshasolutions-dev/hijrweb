type Heading1 = {
  title: string;
  className?: string;
};


const H1 = ({ title, className }: Heading1) => {
  return (
    <h1 className={`text-green-500 font-bold text-4xl text-center  ${className || ''}`}>
      {title}
    </h1>
  );
};

export default H1;