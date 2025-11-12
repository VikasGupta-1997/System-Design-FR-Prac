import { Button, Card, Container, Heading, Stack, Text } from "@chakra-ui/react"

export default function CentralSSO() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Central SSO</Heading>
          <Text color="fg.muted">Single sign-on across your apps</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={3}>
              <Button size="lg" colorPalette="brand">Go to Identity Portal</Button>
              <Text color="fg.muted" fontSize="sm">This issues a shared session for all products.</Text>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


