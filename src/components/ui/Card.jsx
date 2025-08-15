import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
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

  const images = useMemo(
    () =>
      Array.from({ length: totalSlide }, (_, i) => ({
        id: `slide${i + 1}`,
        src: `${picSrc}${i + 1}.png`,
      })),
    [totalSlide, picSrc]
  );

  useEffect(() => {
    images.forEach((img) => {
      const preloadImg = new Image();
      preloadImg.src = img.src;
    });
  }, [images]);

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
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative overflow-hidden flex-shrink-0 cursor-pointer group">
            <img
              src={images[0]?.src}
              alt={`${title} - Preview`}
              className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              onClick={() => openModal(0)}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col h-full space-y-2">
            <h1 className="text-2xl font-bold text-success">{title}</h1>
            <p className="text-md font-semibold">{positions}</p>
            <p className="text-sm text-neutral-content/80 leading-relaxed line-clamp-3">
              {description}
            </p>
            <span className="flex flex-wrap text-xs text-success gap-2 mt-2">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="bg-cyan-500/15 px-2.5 py-1 rounded-full border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-400/50 transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </span>
          </div>
        </div>
        <div className="border-t-1 border-neutral pt-6">
          <div className="flex flex-col justify-center sm:flex-row gap-2 sm:gap-3">
            <Button
              onClick={() => openModal(0)}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white py-3 sm:py-2 px-4 rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base"
              text={
                <span className="flex items-center justify-center sm:justify-start">
                  <MdOutlineRemoveRedEye className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="truncate">View Detail ({totalSlide})</span>
                </span>
              }
            />

            {buttons &&
              buttons.length > 0 &&
              buttons.map((btn, index) => (
                <Button
                  key={index}
                  link={btn.link}
                  text={btn.label}
                  className="w-full sm:w-auto py-3 sm:py-2 px-4 text-sm sm:text-base font-medium transition-colors duration-200"
                >
                  <span className="truncate">{btn.label}</span>
                </Button>
              ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            tabIndex={0}
            transition={{ duration: 0.5 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative sm:w-5/6 max-w-4xl flex justify-center items-center"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex justify-center items-center p-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]?.src}
                    alt={`${title} - Image ${currentImageIndex + 1}`}
                    className="w-auto max-w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    loading="eager"
                    decoding="sync"
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20 cursor-pointer"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-20 cursor-pointer"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
            <motion.div
              className="fixed top-2 left-0 py-1 px-4 text-white bg-black/70 rounded-full text-sm z-20 cursor-pointer"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
            >
              <span className="flex items-center gap-2">
                <ArrowLeft />
                Back
              </span>
            </motion.div>
            <motion.div
              className="fixed top-2 right-0 py-1 px-4 text-white bg-black/70 rounded-full text-sm z-20"
              key={currentImageIndex}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {currentImageIndex + 1} / {images.length}
            </motion.div>
            <motion.div
              className="fixed bottom-0 left-0 right-0 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-full bg-black/40 p-4 sm:p-6 text-white/90 text-center leading-relaxed font-medium text-xs lg:text-sm">
                {description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
