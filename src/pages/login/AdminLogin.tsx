import { Button, Card, Container, Fieldset, Heading, Input, Link, Stack, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
  const navigate = useNavigate()

  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Admin Sign in</Heading>
          <Text color="fg.muted">Enter your admin credentials to continue</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <Fieldset.Root gap={3}>
                <Fieldset.Content>
                  <Input type="text" placeholder="Email or Username" size="lg" />
                </Fieldset.Content>
                <Fieldset.Content>
                  <Input type="password" placeholder="Password" size="lg" />
                </Fieldset.Content>
                <Button size="lg" colorPalette="brand" onClick={() => navigate('/login/admin/2fa')}>Continue</Button>
              </Fieldset.Root>
              <Text color="fg.muted" fontSize="sm">
                Not an admin? <Link href="/">Choose a different role</Link>
              </Text>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


