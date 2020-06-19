import React,{Component} from 'react';

const Downicon =(props)=> {
    return (
        <div
            onClick={props.onClick}
            style={{
                display:"flex",
                flexDirection:"row",
                alignItems: "center",
                justifyContent : "center",
                marginBottom: "-150px" ,
                transform : "translateY(-150px)"
            }}
        >
            <div
                style={{maxWidth : "30px"}}
            >
                <img src={props.icon}  style={{
                    height : "20px",
                    width :"20 px"
                }}/>
            </div>
        </div>
    )
}

export default Downicon