import { Button, Card, Link, Container, Fieldset, Heading, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react"
import { FaGithub, FaGoogle } from "react-icons/fa6"
import { loginEmail, registerEmail, startOAuth } from '../../api';
// import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from "@/context/AuthContext";


export default function UserLogin() {
  // useAuthRedirect();
  const navigate = useNavigate()
  const { user, loadUser } = useAuthContext();
  const [state, setState] = useState({ email: "vikasgupta@gmail.com", password: "Vikas@123" })

  // 🚀 Redirect if already logged in
  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleLogin = async () => {
    console.log("State", state)
    const data = await loginEmail(state.email, state.password)
    console.log("Datta", data)
    if (data.ok) {
      await loadUser();
      navigate('/dashboard')
    }
  }
  return (
    <Container py={8} maxW="sm">
      <Stack gap={6}>
        <Stack gap={1} textAlign="center">
          <Heading size="lg">Sign in as User</Heading>
          <Text color="fg.muted">Use your email/password or continue with a provider</Text>
        </Stack>

        <Card.Root>
          <Card.Body>
            <Stack gap={4}>
              <Fieldset.Root gap={3}>
                <Fieldset.Content>
                  <Input value={state.email} onChange={e => setState(prev => ({ ...prev, email: e.target.value }))} type="email" placeholder="Email" size="lg" />
                </Fieldset.Content>
                <Fieldset.Content>
                  <Input value={state.password} onChange={e => setState(prev => ({ ...prev, password: e.target.value }))} type="password" placeholder="Password" size="lg" />
                </Fieldset.Content>
                <Button onClick={handleLogin} size="lg" colorPalette="brand">Sign in</Button>
              </Fieldset.Root>

              <HStack>
                <Separator />
                <Text color="fg.muted" fontSize="sm">or</Text>
                <Separator />
              </HStack>

              <Stack gap={3}>
                <Button onClick={() => startOAuth('google')} variant="outline" size="lg">
                  <HStack>
                    <FaGoogle />
                    <Text>Continue with Google</Text>
                  </HStack>
                </Button>
                <Button onClick={() => startOAuth('github')} variant="outline" size="lg">
                  <HStack>
                    <FaGithub />
                    <Text>Continue with GitHub</Text>
                  </HStack>
                </Button>
                <Text color="fg.muted" fontSize="sm">
                  Not a user? <Link href="/">Choose a different role</Link>
                </Text>
              </Stack>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </Container>
  )
}


