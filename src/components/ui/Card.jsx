import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Card = ({
  totalSlide,
  picSrc,
  title,
  positions,
  description,
  tech,
  buttons,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array.from({ length: totalSlide }, (_, i) => ({
    id: `slide${i + 1}`,
    src: `${picSrc}${i + 1}.png`,
  }));

  const openModal = (index = 0) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <motion.div
        className="border-1 border-neutral backdrop-blur-md bg-base-100/60 mb-6 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        onClick={() => openModal(0)}
      >
        <h1 className="text-2xl font-bold text-success">{title}</h1>
        <p className="text-md font-semibold">{positions}</p>
        <p className="text-neutral-content/80 leading-relaxed">{description}</p>
        <ul className="list-disc list-inside text-sm text-success">
          {tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => openModal(0)}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
            text={
              <span className="flex items-center">
                <MdOutlineRemoveRedEye className="mr-2 h-4 w-4" />
                View Gallery ({totalSlide})
              </span>
            }
          />

          {buttons &&
            buttons.length > 0 &&
            buttons.map((btn, index) => (
              <Button key={index} link={btn.link} text={btn.label}>
                {btn.label}
              </Button>
            ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            tabIndex={0}
            onClick={closeModal}
          >
            <motion.div
              clasclassName="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-lg w-full mx-4 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={images[currentImageIndex].src}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors cursor-pointer"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
