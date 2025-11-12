import { Button, Card, Container, Heading, Stack, Text } from "@chakra-ui/react"

export default function SocialLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Social Login</Heading>
          <Text color="fg.muted">Choose a provider</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={3}>
              <Button size="lg" colorPalette="brand">Continue with Facebook</Button>
              <Button size="lg" variant="outline">Continue with LinkedIn</Button>
              <Button size="lg" variant="outline">Continue with Apple</Button>
              <Button size="lg" variant="outline">Continue with Twitter/X</Button>
              <Button size="lg" variant="outline">Continue with Discord</Button>
              <Button size="lg" variant="outline">Continue with Slack</Button>
              <Button size="lg" variant="outline">Continue with Microsoft</Button>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


