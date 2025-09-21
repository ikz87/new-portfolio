import { HardShadowRect } from "@/components/ui/HardShadowRect";
import { HardShadowButton } from "@/components/ui/HardShadowButton";
import { HardShadowDropdown } from "@/components/ui/HardShadowDropdown";
import { motion, AnimatePresence } from "motion/react";
import {
  MoveLeft,
  Menu,
  ChevronLeft,
  ChevronRight,
  Loader2,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

type SectionData = {
  title: string;
  period: string;
  content: string[];
  link?: string;
  images?: {
    url: string;
    alt: string;
  }[];
  react?: React.ReactNode;
};

type SectionLayoutProps = {
  items: Record<string, SectionData>;
  defaultSelected?: string;
  showPeriod?: boolean;
};

type ContextType = {
  isExiting: boolean;
  handleNavigation: (path: string) => void;
};

export function SectionLayout({
  items,
  defaultSelected,
  showPeriod = true,
}: SectionLayoutProps) {
  const { isExiting, handleNavigation } = useOutletContext<ContextType>();
  const itemKeys = Object.keys(items);
  const [selectedKey, setSelectedKey] = useState(
    defaultSelected || itemKeys[0],
  );
  const [isAnimating, setIsAnimating] = useState(true);
  const selectedItem = items[selectedKey];
  const [imageIndex, setImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const animDuration = 0.2;
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsModalOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isModalOpen]);

  useEffect(() => {
    // Need this to keep track of whether I want
    // overflows to show or not
    // Used only on contact page really
    setIsAnimating(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setImageIndex(0);
    timeoutRef.current = setTimeout(
      () => {
        setIsAnimating(false);
        timeoutRef.current = null;
      },
      animDuration * 1000 * 2,
    ) as unknown as number;
  }, [selectedKey]);

  const handlePreviousImage = () => {
    if (selectedItem.images && !imageLoading) {
      setImageLoading(true);
      setImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedItem.images!.length - 1,
      );
    }
  };

  const handleNextImage = () => {
    if (selectedItem.images && !imageLoading) {
      setImageLoading(true);
      setImageIndex((prev) =>
        prev < selectedItem.images!.length - 1 ? prev + 1 : 0,
      );
    }
  };

  const handleDotClick = (index: number) => {
    if (!imageLoading && index !== imageIndex) {
      setImageLoading(true);
      setImageIndex(index);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const selectedImage = selectedItem.images?.[imageIndex];
  const hasContent = selectedItem.content && selectedItem.content.length > 0;
  const hasHeaderContent =
    (showPeriod && selectedItem.period) || selectedItem.link;

  return (
    <div className="mx-auto max-w-4xl flex flex-col-reverse gap-3">
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 w-dvw h-screen pb-12"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <motion.div
            className="relative w-full max-w-7xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt="Full size"
              className="w-full aspect-video object-cover rounded-xl border-4 border-black"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer absolute -top-4 -right-4 bg-white border-4 border-black rounded-full p-1"
              onClick={() => {
                setIsModalOpen(false);
              }}
              aria-label="Close image modal"
            >
              <X size={24} strokeWidth={4} />
            </motion.button>
          </motion.div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            key={`${selectedKey}-image`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isExiting ? 0 : 1,
              scale: isExiting ? 0.95 : 1,
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: animDuration, ease: "easeInOut" }}
            className="flex flex-row items-center gap-3 mx-auto max-w-xl w-full"
          >
            {selectedItem.images && selectedItem.images.length > 1 && (
              <motion.div
                key={`${selectedKey}-image-prev`}
                initial={{ x: 60 }}
                animate={{ x: isExiting ? 60 : 0 }}
                exit={{ x: 60 }}
                transition={{ duration: animDuration, ease: "easeInOut" }}
              >
                <HardShadowButton
                  popUpContent={null}
                  className="bg-blue-50 sm:p-3 p-2 flex items-center justify-center sm:h-16 h-12 aspect-square"
                  onClick={handlePreviousImage}
                  disabled={imageLoading}
                  aria-label="Previous image"
                >
                  <ChevronLeft strokeWidth={3} className="w-full h-full" />
                </HardShadowButton>
              </motion.div>
            )}
            <div className="w-full">
              <HardShadowRect
                className={`${selectedItem.images && selectedItem.images.length > 1 ? "rounded-t-xl" : "rounded-xl"} w-full z-10 bg-black hover:border-blue-400 transition-all`}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${selectedKey}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isExiting ? 0 : imageLoading ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    src={selectedImage.url}
                    alt={selectedImage.alt}
                    className="w-full object-cover aspect-video cursor-pointer"
                    onLoad={handleImageLoad}
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  />
                </AnimatePresence>

                <AnimatePresence>
                  {imageLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                    >
                      <Loader2
                        className="w-8 h-8 text-white animate-spin"
                        strokeWidth={3}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </HardShadowRect>
              {selectedItem.images && selectedItem.images.length > 1 && (
                <HardShadowRect className="z-20 w-full h-12 rounded-b-xl border-t-0 bg-blue-50 flex items-center justify-center">
                  {selectedItem.images && selectedItem.images.length > 1 && (
                    <div className="flex items-center gap-2">
                      {selectedItem.images.map((_, index) => (
                        <motion.button
                          key={index}
                          className={`cursor-pointer w-4 h-4 rounded-full transition-all duration-200 ${
                            index === imageIndex
                              ? "bg-black scale-125"
                              : "bg-black/30 hover:bg-black-50"
                          }`}
                          onClick={() => handleDotClick(index)}
                          disabled={imageLoading}
                          whileHover={{
                            scale: index === imageIndex ? 1.1 : 1.1,
                          }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </HardShadowRect>
              )}
            </div>
            {selectedItem.images && selectedItem.images.length > 1 && (
              <motion.div
                key={`${selectedKey}-image-next`}
                initial={{ x: -60 }}
                animate={{ x: isExiting ? -60 : 0 }}
                exit={{ x: -60 }}
                transition={{ duration: animDuration, ease: "easeInOut" }}
              >
                <HardShadowButton
                  popUpContent={null}
                  className="bg-blue-50 sm:p-3 p-2 flex items-center justify-center sm:h-16 h-12 aspect-square"
                  onClick={handleNextImage}
                  disabled={imageLoading}
                  aria-label="Next image"
                >
                  <ChevronRight strokeWidth={3} className="w-full h-full" />
                </HardShadowButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExiting ? 0 : 1,
        }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: animDuration, ease: "easeInOut" }}
      >
        <HardShadowRect
          className={`rounded-xl w-full bg-white p-4 flex flex-col gap-4 ${isAnimating ? "" : "overflow-visible"}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedKey}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExiting ? 0 : 1,
                height: isExiting ? 0 : "auto",
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: animDuration, ease: "easeInOut" }}
              className="flex flex-col gap-4"
            >
              {hasHeaderContent && (
                <div className="flex flex-col gap-2">
                  {showPeriod && selectedItem.period && (
                    <h3 className="font-extrabold text-blue-700">
                      ({selectedItem.period})
                    </h3>
                  )}
                  {selectedItem.link && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      {selectedItem.link}
                    </a>
                  )}
                </div>
              )}
              {hasContent && (
                <div className="flex flex-col gap-3 text-justify">
                  {selectedItem.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
              {selectedItem.react && selectedItem.react}
            </motion.div>
          </AnimatePresence>
        </HardShadowRect>
      </motion.div>
      <div className="w-full flex flex-row gap-3">
        <motion.div
          className="h-16 aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            scale: isExiting ? 0.8 : 1,
          }}
          transition={{ duration: animDuration, ease: "easeInOut" }}
        >
          <HardShadowButton
            popUpContent={null}
            rotate={3}
            className="w-full h-16 bg-blue-50 flex items-center justify-center"
            onClick={() => handleNavigation("/")}
            aria-label="Go to home page"
          >
            <MoveLeft className="" strokeWidth={3} />
          </HardShadowButton>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isExiting ? 0 : 1,
              x: isExiting ? 20 : 0,
            }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: animDuration, ease: "easeInOut" }}
            className="flex-1"
          >
            {(Object.keys(items).length > 1 && (
              <HardShadowDropdown
                className="bg-amber-50 p-4 w-full text-nowrap"
                rotate={1}
                aria-label="Select another item"
                dropdownContent={
                  <HardShadowRect className="w-full bg-white p-2 pt-14 space-y-2">
                    {itemKeys.map((key) => (
                      <div
                        key={key}
                        className={`p-2 hover:bg-gray-100 rounded cursor-pointer ${
                          selectedKey === key ? "bg-blue-100" : ""
                        }`}
                        onClick={() => setSelectedKey(key)}
                      >
                        <span>{items[key].title}</span>
                      </div>
                    ))}
                  </HardShadowRect>
                }
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold">{selectedItem.title}</span>
                  <Menu strokeWidth={3} />
                </div>
              </HardShadowDropdown>
            )) || (
              <HardShadowRect className="w-full p-4 bg-amber-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold">{selectedItem.title}</span>
                </div>
              </HardShadowRect>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
