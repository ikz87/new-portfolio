import { motion } from "motion/react";

type HardShadowButtonProps = {
  children: React.ReactNode;
  className?: string;
  rotate: number
  popUpContent: React.ReactNode;
  popUpDistance?: number;
} & React.ComponentProps<typeof motion.button>;

export function HardShadowButton({
  children,
  className = "",
  rotate = 6,
  popUpContent,
  popUpDistance = 40,
  ...props
}: HardShadowButtonProps) {
  return (
    <>
      <motion.button
        className={`relative cursor-pointer`}
        whileHover="hover"
        whileTap="tap"
        initial="rest"
        {...props}
      >
        <div className={`bg-black opacity-1 top-0 left-0 pointer-events-none translate-y-2 translate-x-2 border-4 rounded-xl ${className}`}>
          {children}
        </div>
        <div className={`absolute brightness-0 top-0 left-0 translate-y-2 translate-x-2 border-4 rounded-xl border-black ${className}`}>
          {children}
        </div>
        { popUpContent && (
          <motion.div 
            className="absolute top-4 left-0 pl-4 pr-2 w-full overflow-y-hidden flex flex-col justify-end"
            variants={{
              rest: { height: 0 }, 
              hover: { height: "auto" },
            }}
          >
            <div className="pb-2"> 
              {popUpContent}
            </div>
          </motion.div>
        )}
        <motion.div 
          className={`origin-top-left absolute top-0 left-0 border-4 rounded-xl border-black overflow-hidden ${className}`}
          variants={{
            rest: {
              rotate: 0,
              y: 0,
              x: 0,
            },
            hover: { rotate: -rotate },
            tap: {
              y: 7, 
              x: 7,
              rotate: 0
            }
          }}
        >
          {children}
        </motion.div>
      </motion.button>
    </>
  )
}
