import { useState } from 'react';
import { Link } from "react-router-dom";
import { HardShadowButton } from './components/ui/HardShadowButton.tsx';
import { HardShadowRect } from './components/ui/HardShadowRect.tsx';
import { Home } from 'lucide-react';

function App() {
  return (
    <>
      <div className="h-dvh w-dvw cyan-100 p-8">
        <div className="w-full flex">
          <HardShadowButton className="bg-rose-200 p-4" rotate={0}>
            <Link to="/">
              <Home className="" strokeWidth={4}/>
            </Link>
          </HardShadowButton>
        </div>
      </div>
    </>
  )
}

export default App
