import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'
import { MusicProvider } from './context/MusicProvider'

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </MusicProvider>

    </BrowserRouter>
  )
}
export default App