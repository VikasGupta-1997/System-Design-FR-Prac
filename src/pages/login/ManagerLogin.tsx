import { Card, Container, Heading, Stack, Text } from "@chakra-ui/react"

export default function ManagerLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Manager Sign in</Heading>
          <Text color="fg.muted">Flow TBD</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Text>Manager login flow will be implemented later.</Text>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


