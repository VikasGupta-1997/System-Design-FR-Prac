import { Box, Container, HStack, Heading } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import { Route, Routes } from "react-router-dom"
import RoleSelector from "./pages/RoleSelector"
import UserLogin from "./pages/login/UserLogin"
import AdminLogin from "./pages/login/AdminLogin"
import ManagerLogin from "./pages/login/ManagerLogin"
import Admin2FA from "./pages/login/Admin2FA"
import ConsumerLogin from "./pages/login/ConsumerLogin"
import B2BLogin from "./pages/login/B2BLogin"
import DevTokens from "./pages/login/DevTokens"
import CRMDeviceLogin from "./pages/login/CRMDeviceLogin"
import PasskeysLogin from "./pages/login/PasskeysLogin"
import SocialLogin from "./pages/login/SocialLogin"
import InviteLogin from "./pages/login/InviteLogin"
import QRLogin from "./pages/login/QRLogin"
import ServiceAccounts from "./pages/login/ServiceAccounts"
import CentralSSO from "./pages/login/CentralSSO"
import AuthCallback from "./pages/AuthCallback"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ui/ProtectedRoute"

const App = () => {
  return (
    <Box>
      <HStack px={4} py={3} justify="space-between" borderBottomWidth="1px">
        <Heading size="md">Instagram Clone</Heading>
        <ColorModeButton />
      </HStack>

      <Container py={6} maxW="container.lg">
        <Routes>
          <Route path="/" element={<RoleSelector />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/admin/2fa" element={<Admin2FA />} />
          <Route path="/login/manager" element={<ManagerLogin />} />
          <Route path="/login/consumer" element={<ConsumerLogin />} />
          <Route path="/login/b2b" element={<B2BLogin />} />
          <Route path="/login/developer" element={<DevTokens />} />
          <Route path="/login/crm" element={<CRMDeviceLogin />} />
          <Route path="/login/passkeys" element={<PasskeysLogin />} />
          <Route path="/login/social" element={<SocialLogin />} />
          <Route path="/login/invite" element={<InviteLogin />} />
          <Route path="/login/qr" element={<QRLogin />} />
          <Route path="/login/service" element={<ServiceAccounts />} />
          <Route path="/login/sso" element={<CentralSSO />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<RoleSelector />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App