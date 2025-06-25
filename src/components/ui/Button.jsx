const Button = ({ link, text }) => {
  return (
    <>
      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm border-1 p-3 border-neutral text-gray-300 
            hover:bg-neutral  hover:scale-105
            hover:shadow-[0_0_10px_rgba(79,70,229,255)]

            transition-all duration-300 ease-in-out"
        >
          {text}
        </a>
      </div>
    </>
  );
};

export default Button;
