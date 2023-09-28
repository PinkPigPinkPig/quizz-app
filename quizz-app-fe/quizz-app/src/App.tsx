import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login, Quiz, Result } from "./components"
import { ContextProvider } from "./hooks/useStateContext"
import Layout from "./layout"
import CreateQuestion from "./components/CreateQuestion"

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/create-question' element={<CreateQuestion />} />
            <Route path='/' element={<Layout />}>
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/result' element={<Result />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
