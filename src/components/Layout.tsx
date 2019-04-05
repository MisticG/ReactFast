import React from "react";
import Header from "./navbar";
import Content from "./content";

export default function Layout() {
    return (
        <div style = { container }>
            <Header/>
            <Content />

            
        </div>
    );
}

const container: React.CSSProperties = {
    backgroundColor: '#393736',
    width: '100%',
    height: '100%'
}