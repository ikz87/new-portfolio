import { useState } from 'react'
import { HardShadow } from './components/ui/HardShadow';

function App() {

  return (
    <HardShadow>
      <div className="bg-red-50 p-2">
        some content
      </div>
    </HardShadow>
  )
}

export default App
