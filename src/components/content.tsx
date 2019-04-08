import React, { CSSProperties } from "react";

export default function Content() {
    /*const singleImg = image.map((img) => <div style={imageStyleSrc}>{img}</div>)*/

    return (
        <div style={ imgContainer }>
            <img style={ffs} src="./assets/desert.jpg">8456456</img>
            <img style={ffs} src="./assets/forest.jpg"><span>Forest</span></img>
            <img style={ffs} src="./assets/sky.jpg"></img>
        </div>
    )
}
//testa att köra en position relative på parent och absolute på child. Lägg även till width direkt i img src
const imgContainer: CSSProperties = {
    position: 'relative',
   /* width: '100%',
    height: '900px',*/
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'spaceAround',
    objectFit: 'cover',
}
const ffs: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '270px',
    margin: '0.5 0.5em',

}

/*const styleImg: CSSProperties = {
    display: 'flex',
    objectFit: 'cover',
    height: '25%',
    overflow: 'hidden'
}*/