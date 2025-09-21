import { motion } from "motion/react";

type HardShadowButtonControlledProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  isPressed?: boolean;
} & React.ComponentProps<typeof motion.button>;

export function HardShadowButtonControlled({
  children,
  className = "",
  rotate = 2.5,
  isPressed = false,
  ...props
}: HardShadowButtonControlledProps) {
  return (
    <motion.button
      className={`relative cursor-pointer w-full`}
      whileHover={!isPressed ? "hover" : undefined}
      animate={isPressed ? "pressed" : "rest"}
      initial="rest"
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
          pressed: {
            y: 7,
            x: 7,
            rotate: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}
