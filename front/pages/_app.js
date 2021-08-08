import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head'

// index.js가 Component로 들어감.
const NodeBird = ({Component}) => {
    return(
    <>   
        <Head>
            <meta chaSet="utf-8"/>
            <title>NodeBird</title>
        </Head>
        <Component/>
    </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;