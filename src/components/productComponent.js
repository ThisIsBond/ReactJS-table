import React from 'react'
import { IoRefresh } from "react-icons/io5";

export default function Product({ data }) {
    return (
        <div style={{ marginLeft: '5%', marginRight: '5%', height: '15%', backgroundColor: '#ffffff', flexDirection: 'row', padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>Product Trace Details</h3>
                    <p style={{ position: 'absolute', right: '6%' }}>
                        <IoRefresh style={{ paddingRight: 5 }} size={20} />Reproduce Product Trace
                    </p>
                
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{}}>
                    <h5 style={{ fontWeight: 'bold', marginTop: '7%' }}>VIN</h5>
                    <p style={{ paddingBottom: 15 }}>{data.vin}</p>
                    <h5 style={{ fontWeight: 'bold' }}>User ID</h5>
                    <p style={{}}>{data.userId}</p>
                    <h5 style={{ fontWeight: 'bold', marginTop: '7%' }}>TimeStamp</h5>
                    <p style={{ marginBottom: '5%' }}>{data.timestamp}</p>
                </div>
                <div style={{ marginLeft: '25%' }}>
                    <h5 style={{ fontWeight: 'bold', marginTop: '7%' }}>Identity Provider</h5>
                    <p style={{ paddingBottom: 15 }}>{data.identityProvider}</p>
                    <h5 style={{ fontWeight: 'bold' }}>Identity Provider User ID</h5>
                    <p style={{}}>{data.userId}</p>
                    <h5 style={{ fontWeight: 'bold', marginTop: '7%' }}>Request Type</h5>
                    <p style={{}}>{data.requestType}</p>
                </div>
                <div style={{ marginLeft: '25%' }}>
                    <h5 style={{ fontWeight: 'bold', marginTop: '7%' }}>Market</h5>
                    <p style={{ paddingBottom: 15 }}>{data.market}</p>
                    <h5 style={{ fontWeight: 'bold' }}>Language</h5>
                    <p style={{}}>English</p>
                </div>
            </div>
        </div>
    )
}
