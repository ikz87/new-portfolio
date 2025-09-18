export function HardShadow({
  children,
}) {
  return (
    <>
      <div className="relative">
        <div className="bg-black opacity-0 top-0 left-0 pointer-events-none translate-y-2 translate-x-2 border-4 rounded-xl ">
          {children}
        </div>
        <div className="absolute brightness-0 top-0 left-0 translate-y-2 translate-x-2 border-4 rounded-xl border-black">
          {children}
        </div>
        <div className="absolute top-0 left-0 border-4 rounded-xl border-black overflow-hidden">
          {children}
        </div>
      </div>
    </>
  )
}
