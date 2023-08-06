import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home';
import EditorPage from './pages/editorPage';
function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88'
              }
            }
          }}/>
      </div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />}></Route>

          <Route path='/editor/:roomId' element={<EditorPage />}></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
