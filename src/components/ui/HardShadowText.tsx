import React from "react";

type HardShadowTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function HardShadowText({ children, className }: HardShadowTextProps) {
  return (
    <div className={className}>
      <div className="relative">
        <div
          className="opacity-0 top-0 left-0 pointer-events-none translate-y-1 translate-x-1"
          aria-hidden="true"
        >
          {children}
        </div>
        <div
          className="absolute brightness-0 top-0 left-0 translate-y-0.5 translate-x-0.5 "
          aria-hidden="true"
        >
          {children}
        </div>
        <div
          className="absolute brightness-0 top-0 left-0 translate-y-1 translate-x-1 "
          aria-hidden="true"
        >
          {children}
        </div>
        <div className="absolute top-0 left-0 ">{children}</div>
      </div>
    </div>
  );
}
