// import React from 'react';
import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;


const LoginForm = () => {
    const dispatch = useDispatch();

    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    const onsubmitForm = useCallback(() => {
        // antd에서는 onFinish에 이미 preventDefault가 적용되어 있어서 e.preventDefault 넣으면 안됨. 
        console.log(id, password);
        dispatch(loginAction({ id, password }))
    }, [id, password]);

    return(
        <FormWrapper onFinish={onsubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required></Input>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password" 
                type="password" 
                value={password} 
                onChange={onChangePassword} 
                requird></Input>
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>

        </FormWrapper>
    );
};



export default LoginForm;