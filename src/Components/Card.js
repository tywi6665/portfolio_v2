import React from 'react';

const Card = ({ title, description, animation }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-screen">
                    <div id="screen"></div>
                    <div id="keyboard"></div>
                </div>
                <div className="card-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="icons">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;