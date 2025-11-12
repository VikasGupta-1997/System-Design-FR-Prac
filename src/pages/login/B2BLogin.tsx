import { Button, Card, Container, Heading, Stack, Text } from "@chakra-ui/react"

export default function B2BLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Sign in (B2B)</Heading>
          <Text color="fg.muted">Use your enterprise identity provider</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={3}>
              <Button size="lg" colorPalette="brand">Continue with SAML SSO</Button>
              <Button size="lg" variant="outline">Continue with Microsoft</Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


