import React from 'react';

const Card = ({ info }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-screen">
                    <div id="screen"></div>
                    <div id="keyboard"></div>
                </div>
                <div className="card-info"></div>
            </div>
        </div>
    );
}

export default Card;