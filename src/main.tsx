import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "@/components/ui/provider"
import { DarkMode, LightMode, useColorMode } from "@/components/ui/color-mode"
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider defaultTheme="light" enableSystem={false}>
      <BrowserRouter>
        <ModeBridge />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

function ModeBridge() {
  const { colorMode } = useColorMode()
  if (colorMode === 'dark') {
    return (
      <DarkMode>
        <App />
      </DarkMode>
    )
  }
  return (
    <LightMode>
      <App />
    </LightMode>
  )
}
