import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login, Quiz, Result } from "./components"
import { ContextProvider } from "./hooks/useStateContext"

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
