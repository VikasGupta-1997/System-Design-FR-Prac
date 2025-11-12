import { Button, Card, Container, Fieldset, Heading, Input, Stack, Text } from "@chakra-ui/react"

export default function InviteLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Invite-only Access</Heading>
          <Text color="fg.muted">Enter your invite token to continue</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <Fieldset.Root gap={3}>
                <Fieldset.Content>
                  <Input type="text" placeholder="Invite token" size="lg" />
                </Fieldset.Content>
                <Button size="lg" colorPalette="brand">Continue</Button>
              </Fieldset.Root>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


