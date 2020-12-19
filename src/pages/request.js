import React from 'react';
import Layout from '@theme/Layout';
import { ReactTypeformEmbed } from 'react-typeform-embed';


const Request = () => {
    return (
        <Layout title="Request API Key">
            <div>
                <ReactTypeformEmbed url="https://gadadarshan.typeform.com/to/eP0xEgyX" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '80%',
                    overflow: 'hidden'
                }}></ReactTypeformEmbed>
            </div>
        </Layout >
    );
}

export default Request;
