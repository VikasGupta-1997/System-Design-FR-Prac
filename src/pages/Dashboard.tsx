import { updateBio } from '@/api'
import { useAuthContext } from '@/context/AuthContext'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const { logout } = useAuthContext();
    const [bio, setBio] = useState('')

    const logOut = async () => {
        await logout()
        navigate('/login/user')
    }

    const changeBio = async () => {
        await updateBio(bio)
    }

    return (
        <div>
            <div>Dashboard</div>
            <Box mb="2">
                <Box mb="2">
                    <label htmlFor="bio" >Bio:</label>
                    <Input name="bio" onChange={e => setBio(e.target.value)}  value={bio} />
                </Box>
                <Button onClick={changeBio} variant="outline" size="lg">
                    <Text>Submit</Text>
                </Button>
            </Box>
            <Button onClick={logOut} variant="outline" size="lg">
                <Text>Logout</Text>
            </Button>
        </div>
    )
}

export default Dashboard