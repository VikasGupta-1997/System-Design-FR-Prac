import { Button, Card, Container, Fieldset, Heading, Input, Separator, Stack, Text } from "@chakra-ui/react"

export default function ConsumerLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Sign in (Consumer)</Heading>
          <Text color="fg.muted">Use OTP or Magic Link</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <Fieldset.Root gap={3}>
                <Fieldset.Content>
                  <Input type="email" placeholder="Email" size="lg" />
                </Fieldset.Content>
                <Button size="lg" colorPalette="brand">Send Magic Link</Button>
              </Fieldset.Root>

              <Separator />

              <Fieldset.Root gap={3}>
                <Fieldset.Content>
                  <Input type="tel" placeholder="Phone (OTP)" size="lg" />
                </Fieldset.Content>
                <Button size="lg" variant="outline">Send OTP</Button>
              </Fieldset.Root>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


