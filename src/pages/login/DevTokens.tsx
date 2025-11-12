import { Button, Card, Container, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react"

export default function DevTokens() {
  return (
    <Container py={8} maxW="md">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Developer Access</Heading>
          <Text color="fg.muted">Manage your API tokens</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <HStack>
                <Input readOnly value="sk_live_••••••••••••" />
                <Button variant="outline">Copy</Button>
              </HStack>
              <Button colorPalette="brand">Generate new token</Button>
              <Text color="fg.muted" fontSize="sm">Keep tokens secret. They grant API access.</Text>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


