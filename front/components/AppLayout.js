import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/Link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;


const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    // 구조분해 할당!!! (이렇게 해두됨)
    // const { isLoggedIn } = useSelector((state) => state.user)  

    return(
        <div>
            <Menu mode="horizontal">
                {/* href에는 pages안에 있는 파일명 쓰면 됨! */}
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link> 
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>       
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>                
            </Menu>
            <Row gutter={8}>
                {/* md 6, 12, 6이면  25%, 50%, 25% 세등분한거 */}
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://blog.naver.com/youjinee98" target="_blank" rel="noreferrer noopener">Made by Yujin</a>
                </Col>
            </Row>   
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;