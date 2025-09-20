import { motion } from "motion/react";
import { useState } from "react";

type HardShadowDropdownProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  dropdownContent: React.ReactNode;
  dropdownDistance?: number;
} & React.ComponentProps<typeof motion.button>;

export function HardShadowDropdown({
  children,
  className = "",
  rotate = 2.5,
  dropdownContent,
  dropdownDistance = 40,
  ...props
}: HardShadowDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className={`relative cursor-pointer w-full`}
        whileHover={!isOpen ? "hover" : undefined}
        animate={isOpen ? "open" : "rest"}
        initial="rest"
        onClick={() => setIsOpen(!isOpen)}
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

        {dropdownContent && (
          <motion.div
            className="z-30 absolute top-4 left-0 pl-4 pr-2 w-full overflow-y-hidden flex flex-col justify-end"
            variants={{
              rest: { height: 0 },
              open: { height: "auto" },
            }}
          >
            <div className="pb-2">{dropdownContent}</div>
          </motion.div>
        )}

        <motion.div
          className={`z-40 origin-top-left absolute top-0 left-0 border-4 rounded-xl border-black overflow-hidden ${className}`}
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
    </>
  );
}
