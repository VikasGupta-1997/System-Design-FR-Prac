import { Button, Card, Container, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const roles = [
  { key: "user", label: "User" },
  { key: "admin", label: "Admin" },
  // { key: "manager", label: "Manager" },
  { key: "consumer", label: "Consumer App" },
  { key: "b2b", label: "B2B App" },
  { key: "developer", label: "Developer" },
  { key: "crm", label: "CRM Device" },
  { key: "passkeys", label: "Passkeys / WebAuthn" },
  { key: "social", label: "More Social Providers" },
  { key: "invite", label: "Invite-only" },
  { key: "qr", label: "QR Code Login" },
  { key: "service", label: "Service Accounts (Client Creds)" },
  { key: "sso", label: "Central SSO (Multi-app)" },
]

export default function RoleSelector() {
  const navigate = useNavigate()

  return (
    <Container py={8} maxW="md">
      <Stack gap={6} align="stretch">
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Select Role</Heading>
          <Text color="fg.muted">Choose how you want to sign in</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={3}>
              {roles.map((role) => (
                <Button key={role.key} size="lg" onClick={() => navigate(`/login/${role.key}`)}>
                  Continue as {role.label}
                </Button>
              ))}
            </Stack>
          </Card.Body>
        </Card.Root>

        <HStack justify="center">
          <Text color="fg.muted" fontSize="sm">You can change role anytime.</Text>
        </HStack>
      </Stack>
    </Container>
  )
}


