import { Button, Card, Container, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function Admin2FA() {
  const navigate = useNavigate()

  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Two‑Factor Authentication</Heading>
          <Text color="fg.muted">Enter the 6‑digit code from your authenticator app</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <HStack>
                <Input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={6} placeholder="••••••" size="lg" textAlign="center" />
              </HStack>
              <Button size="lg" colorPalette="brand" onClick={() => navigate('/')}>Verify</Button>
              <Text color="fg.muted" fontSize="sm">Having trouble? Use a backup code or contact support.</Text>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


