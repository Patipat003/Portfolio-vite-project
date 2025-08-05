import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import TypingText from "./TypingText";
import { Loader2 } from "lucide-react";

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
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  const images = Array.from({ length: totalSlide }, (_, i) => ({
    id: `slide${i + 1}`,
    src: `${picSrc}${i + 1}.png`,
  }));

  // Preload first image and next/prev images when modal opens
  useEffect(() => {
    if (isModalOpen) {
      const imagesToPreload = [];

      // Always preload current image
      imagesToPreload.push(currentImageIndex);

      // Preload next and previous images
      if (images.length > 1) {
        const nextIndex =
          currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        const prevIndex =
          currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        imagesToPreload.push(nextIndex, prevIndex);
      }

      imagesToPreload.forEach((index) => {
        if (!preloadedImages.has(index)) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, index]));
          };
          img.src = images[index].src;
          setPreloadedImages((prev) => new Set([...prev, index]));
        }
      });
    }
  }, [isModalOpen, currentImageIndex, images, preloadedImages]);

  // Preload adjacent images when changing slides
  useEffect(() => {
    if (isModalOpen && images.length > 1) {
      const nextIndex =
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      const prevIndex =
        currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

      [nextIndex, prevIndex].forEach((index) => {
        if (!preloadedImages.has(index)) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, index]));
          };
          img.src = images[index].src;
          setPreloadedImages((prev) => new Set([...prev, index]));
        }
      });
    }
  }, [currentImageIndex, isModalOpen, images, preloadedImages]);

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

  const isImageLoaded = loadedImages.has(currentImageIndex);

  return (
    <>
      <motion.div
        className="border-1 border-neutral backdrop-blur-md bg-base-100/60 mb-6 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <img
              src={images[0].src}
              alt={`${title} - Preview`}
              className="object-cover rounded-lg cursor-pointer"
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
                <a
                  key={index}
                  className="bg-cyan-500/15 px-2.5 py-1 rounded-full border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-400/50 transition-all duration-200"
                >
                  {item}
                </a>
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
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            tabIndex={0}
            onClick={closeModal}
          >
            <motion.div
              className="rounded-3xl max-w-4xl p-12 w-full shadow-2xl"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg min-h-[400px] flex items-center justify-center bg-gray-800/20">
                  <AnimatePresence mode="wait">
                    {!isImageLoaded && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-gray-800/30 rounded-lg z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <Loader2 className="w-8 h-8 text-white/70 animate-spin" />
                          <span className="text-white/60 text-sm">
                            Loading image...
                          </span>
                        </div>
                      </motion.div>
                    )}

                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex].src}
                      alt={`${title} - Image ${currentImageIndex + 1}`}
                      className="w-full max-h-full object-contain rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: isImageLoaded ? 1 : 0, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      loading="eager"
                      decoding="sync"
                      onLoad={() => {
                        setLoadedImages(
                          (prev) => new Set([...prev, currentImageIndex])
                        );
                      }}
                      style={{
                        visibility: isImageLoaded ? "visible" : "hidden",
                      }}
                    />
                  </AnimatePresence>
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors cursor-pointer z-20"
                      disabled={!isImageLoaded}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors cursor-pointer z-20"
                      disabled={!isImageLoaded}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <motion.div
                  className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm z-20"
                  key={currentImageIndex}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentImageIndex + 1} / {images.length}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="w-full p-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="relative">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent flex-1"></div>
                  <div className="px-4 text-cyan-300 text-sm font-semibold tracking-wider uppercase">
                    Description
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent flex-1"></div>
                </div>

                <div className="text-white/90 text-center leading-relaxed font-medium">
                  <TypingText text={description} speed={10} showCursor={true} />
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
