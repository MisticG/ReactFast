import React, { CSSProperties } from "react";

export default function Content() {
    const image = images;
    const singleImg = image.map((img) => <div style = { imageStyleSrc }>{img}</div>)

    return (
        <div style={ imgContainer }>
            {singleImg}
        </div>
    );
}
//testa att köra en position relative på parent och absolute på child. Lägg även till width direkt i img src
const ffs: CSSProperties = {
    maxWidth: '100%',

}

const images = [
    <img style = {ffs} src="./assets/desert.jpg"></img>,
    <img style = {ffs} src="./assets/forest.jpg"></img>
    /*<img style = {ffs} src="./assets/sky.jpg"></img>*/
]

const imgContainer: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
}

const imageStyleSrc: CSSProperties = {
    display: 'flex',
    width: '100%'
}

/*const styleImg: CSSProperties = {
    display: 'flex',
    objectFit: 'cover',
    height: '25%',
    overflow: 'hidden'
}*/