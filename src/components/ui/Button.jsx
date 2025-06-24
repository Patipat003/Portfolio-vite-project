const Button = ({ link, text }) => {
  return (
    <>
      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm border-1 p-3 border-success text-gray-300 
            hover:bg-success hover:text-black hover:scale-105
            hover:shadow-[0_0_10px_rgba(72,239,188,0.9)] 
            transition-all duration-300 ease-in-out"
        >
          {text}
        </a>
      </div>
    </>
  );
};

export default Button;
