import { Button, Card, Container, Fieldset, Heading, Input, Stack, Text } from "@chakra-ui/react"

export default function CRMDeviceLogin() {
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Device Login (CRM)</Heading>
          <Text color="fg.muted">Pair this device to your account</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <Fieldset.Root gap={3}>
                <Fieldset.Content>
                  <Input type="text" placeholder="Device ID" size="lg" />
                </Fieldset.Content>
                <Button size="lg" colorPalette="brand">Send Login Request</Button>
              </Fieldset.Root>
              <Text color="fg.muted" fontSize="sm">Alternatively, enter the code shown on the device screen.</Text>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


