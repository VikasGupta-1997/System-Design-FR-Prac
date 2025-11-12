import { Button, Card, Container, Heading, Stack, Text } from "@chakra-ui/react"

export default function PasskeysLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Passkeys / WebAuthn</Heading>
          <Text color="fg.muted">Use Face ID, Touch ID, or security key</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={3}>
              <Button size="lg" colorPalette="brand">Register a Passkey</Button>
              <Button size="lg" variant="outline">Sign in with Passkey</Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


