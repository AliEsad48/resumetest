import { useState } from "react"
import { BrowserRouter } from "react-router-dom"

import CustomRoutes from "./router/CustomRoutes"

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false)
  return (
    <BrowserRouter>
      <CustomRoutes isUserLogin={isUserLogin} setIsUserLogin={isUserLogin} />
    </BrowserRouter>
  )
}

export default App
