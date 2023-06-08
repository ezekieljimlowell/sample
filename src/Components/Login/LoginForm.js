import React, { useState } from 'react';
import { LinkWrapper, LoginBackground, LoginWrapper } from './LoginForm.style';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Input } from './LoginForm.style';

const LoginForm = () => {
    const [formInfo, setFormInfo] = useState({
        email: "",
        password: "",
    })
    const login = () => {

    }
    const loginHandle = e => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }
    return (
        <>
            <LoginBackground>
                <LoginWrapper>
                    <Form onSubmit={login}>
                        <InputGroup>
                            <Input name="email" type='email' required placeholder='Email' onChange={loginHandle}></Input>
                        </InputGroup>
                        <InputGroup>
                            <Input name="password" type='password' required onChange={loginHandle} placeholder='Password'></Input>
                        </InputGroup>
                        <Button type="submit" className='loginButton'>Login</Button>
                        <LinkWrapper>
                            <Link to="/adduser">Add user</Link>
                        </LinkWrapper>
                    </Form>
                </LoginWrapper>
            </LoginBackground>
        </>
    )
}

export default LoginForm;
