import { Button, Card, Container, Heading, Stack, Text } from "@chakra-ui/react"

export default function QRLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">QR Code Login</Heading>
          <Text color="fg.muted">Scan on your phone to sign in</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4} align="center">
              <Text p={6} borderWidth={1} borderRadius="md" w="full" textAlign="center">
                QR Code Placeholder
              </Text>
              <Button variant="outline">Refresh Code</Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


