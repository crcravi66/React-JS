import React from "react";
import Card from "./Card";


const CardsList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                return (<Card key={i} {...user} />);
                })
            }           
        </div>
        );
    }


export default CardsList;