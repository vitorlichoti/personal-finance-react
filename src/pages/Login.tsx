import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import styles from './Login.module.css'
import { useState } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

function Login() {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <h1 className={styles.title}>Personal Finance</h1>
                <h3 className={styles.subtitle}>Login</h3>

                <Input placeholder='Insira o seu nome de usuário...' size='lg' />

                <InputGroup size='lg'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
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
                    onClick={() => setLoading(true)}
                >
                    Entrar
                </Button>
            </div>
        </div>
    )
}

export default Login
