import { logout } from '@/api'
import { Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const logOut = async () => {
        await logout()
        navigate('/login/user')
    }
    return (
        <div>
            <div>Dashboard</div>
            <Button onClick={logOut} variant="outline" size="lg">
                <Text>Logout</Text>
            </Button>
        </div>
    )
}

export default Dashboard