import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import styles from './Login.module.css'
import { useState } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { handleLogin } from '../service/handlerLogin'
import {useNavigate} from "react-router-dom";

function Login() {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => setShow(!show)
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <h1 className={styles.title}>Personal Finance</h1>
                <h3 className={styles.subtitle}>Login</h3>

                <Input
                    placeholder='Insira o seu nome de usuário...'
                    style={{color: 'whitesmoke'}}
                    size='lg'
                    value={userName}
                    onChange={({target}) => setUserName(target.value)}
                />

                <InputGroup size='lg'>
                    <Input
                        pr='4.5rem'
                        style={{color: 'whitesmoke'}}
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick} backgroundColor='transparent'>
                        {show ? <EyeOutlined style={{ fontSize: '20px', color: '#4b4f56'}}/> : <EyeInvisibleOutlined style={{ fontSize: '20px', color: '#4b4f56'}}/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button
                    isLoading={loading}
                    loadingText='Carregando...'
                    borderColor='#ccd0d5'
                    color='#4b4f56'
                    variant='outline'
                    onClick={() => handleLogin(userName, password, setLoading, navigate)}
                >
                    Entrar
                </Button>
            </div>
        </div>
    )
}

export default Login
