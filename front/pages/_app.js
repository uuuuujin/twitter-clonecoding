import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head'
import wrapper from '../store/configureStore';


// index.js가 Component로 들어감.
const NodeBird = ({Component}) => {
    return(
    <>   
        <Head>
            <meta chaset="utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component/>
    </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);