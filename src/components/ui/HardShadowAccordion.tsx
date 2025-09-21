import { motion } from "motion/react";
import { useState } from "react";

type HardShadowAccordionProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  accordionContent: React.ReactNode;
} & React.ComponentProps<typeof motion.button>;

export function HardShadowAccordion({
  children,
  className = "",
  rotate = 2.5,
  accordionContent,
  ...props
}: HardShadowAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <motion.button
        className={`relative cursor-pointer w-full`}
        whileHover={!isOpen ? "hover" : undefined}
        animate={isOpen ? "open" : "rest"}
        initial="rest"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        {...props}
      >
        <div
          className={`bg-black opacity-1 top-0 left-0 pointer-events-none translate-y-2 translate-x-2 border-4 rounded-xl ${className}`}
        >
          {children}
        </div>
        <div
          className={`absolute brightness-0 top-0 left-0 translate-y-2 translate-x-2 border-4 rounded-xl border-black ${className}`}
        >
          {children}
        </div>
        <motion.div
          className={`origin-top-left absolute top-0 left-0 border-4 rounded-xl border-black overflow-hidden ${className}`}
          variants={{
            rest: {
              rotate: 0,
              y: 0,
              x: 0,
            },
            hover: { rotate: -rotate },
            open: {
              y: 7,
              x: 7,
              rotate: 0,
            },
          }}
        >
          {children}
        </motion.div>
      </motion.button>

      {accordionContent && (
        <motion.div
          className="w-full overflow-hidden"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { height: 0, opacity: 0 },
            open: { 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="pt-4">
            {accordionContent}
          </div>
        </motion.div>
      )}
    </div>
  );
}
