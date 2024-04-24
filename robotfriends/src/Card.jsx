import React from "react";


const Card = ({ name, gmail, id }) => {
    return (
        <div className="bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robort" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{gmail}</p>
            </div>
        </div>
    );
}

export default Card;