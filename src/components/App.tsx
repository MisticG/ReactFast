//import * as React from "react";
import React from "react";
import Layout from "./Layout";

//interface MyApp { compiler: string; framework: string; }

export default function App() {
    return (
        <div style = { container }>
        <Layout/>
        </div>
        )
}

/*const centeredContent: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0'
}*/

const container: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: '#393736',
    width: '100%',
    height: '100%'
}