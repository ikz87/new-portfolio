import React from "react";

type HardShadowRectProps = {
  children: React.ReactNode;
  className: string;
};

export function HardShadowRect({
  children,
  className="",
}: HardShadowRectProps) {
  return (
    <>
      <div className="relative">
        <div className={`bg-black opacity-0 top-0 left-0 pointer-events-none translate-y-2 translate-x-2 border-4 ${className}`}>
            {children}
        </div>
        <div className={`absolute brightness-0 top-0 left-0 translate-y-2 translate-x-2 border-4 border-black ${className}`}>
            {children}
        </div>
        <div className={`absolute top-0 left-0 border-4 border-black overflow-hidden ${className}`}>
            {children}
        </div>
      </div>
    </>
  )
}
