import { Carousel } from "flowbite-react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Card = ({
  totalSlide,
  picSrc,
  title,
  positions,
  description,
  tech,
  buttons,
}) => {
  const images = Array.from({ length: totalSlide }, (_, i) => ({
    id: `slide${i + 1}`,
    src: `${picSrc}${i + 1}.png`,
  }));

  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 mb-6 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <div className="h-96 xl:h-132">
        <Carousel slideInterval={5000}>
          {images.map((img, index) => (
            <img key={img.id} src={img.src} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>
      </div>

      <h1 className="text-3xl font-bold text-success">{title}</h1>
      <p className="text-lg font-semibold">{positions}</p>
      <p className="text-neutral-content/80 leading-relaxed">{description}</p>
      <ul className="list-disc list-inside text-sm text-success">
        {tech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="md:flex flex-rows space-x-4  space-y-2">
        {buttons && buttons.length > 0 && (
          <div className="md:flex flex-rows space-x-4 space-y-2">
            {buttons.map((btn, index) => (
              <Button key={index} link={btn.link} text={btn.label}>
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default Card;
