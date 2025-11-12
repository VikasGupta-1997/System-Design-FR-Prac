import { Button, Card, Container, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react"

export default function ServiceAccounts() {
  return (
    <Container py={8} maxW="md">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Service Accounts</Heading>
          <Text color="fg.muted">Use OAuth2 Client Credentials</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <HStack>
                <Input readOnly value="client_id_••••••••" />
                <Button variant="outline">Copy</Button>
              </HStack>
              <HStack>
                <Input readOnly value="client_secret_••••••••" />
                <Button variant="outline">Reveal</Button>
              </HStack>
              <Button colorPalette="brand">Rotate credentials</Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


