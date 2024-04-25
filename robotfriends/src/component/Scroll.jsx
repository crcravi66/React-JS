import React from "react";


const Scroll = (props) =>{
    return(
        <div style={{overflowY: 'scroll', border: '5px solid gray', height : '500px', boxShadow: '0px 0px 35px 0px rgba(0,0,0,0.75)'    }}>
            {props.children}
        </div>
    )
}

export default Scroll;