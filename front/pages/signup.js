import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import useInput from '../hooks/useInput';
import { Form, Input, Checkbox, Button } from 'antd'
import AppLayout from '../components/AppLayout';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
`;



const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [])


    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
    },[password, passwordCheck, term]);

    return (
    <AppLayout>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required></Input>
            </div>
            <div>
                <label htmlFor="user-nick">닉네임</label>
                <br/>
                <Input name="user-nick" value={nickname} onChange={onChangeNickname} required></Input>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required></Input>
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호 확인</label>
                <br/>
                <Input 
                    name="user-password-check" 
                    type="password"
                    value={passwordCheck}
                    onChange={onChangePasswordCheck} 
                    required>
                </Input>
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div>
                <Checkbox name="use-term" checked={term} onChange={onChangeTerm}>유지니 말을 잘 들을 것을 동의합니다.</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>
            <div style={{ marginTop: 10 }}>
                {/* htmlType="submit"으로 하면 버튼을 누를때 onFinish의 onSubmit이 호출됨.  */}
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>
    </AppLayout>
    )
};

export default Signup;