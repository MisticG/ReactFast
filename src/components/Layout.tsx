import React from "react";
import Header from "./navbar";
import Content from "./content";

export default function Layout() {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
        
    );
}

/*const container: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: '#393736',
    width: '100%',
    height: '100%'
}*/