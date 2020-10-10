import React from 'react';
import Layout from '@theme/Layout';
import { ReactTypeformEmbed } from 'react-typeform-embed';


const Request = () => {
    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '20px',
                }}>
                <ReactTypeformEmbed url="https://gadadarshan.typeform.com/to/bmPlJFPe" />
            </div>
        </Layout >
    );
}

export default Request;
