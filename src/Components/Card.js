import React from 'react';

const Card = ({ info }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-screen">
                    <div id="screen"></div>
                    <div id="keyboard"></div>
                </div>
                <div className="card-info">
                    <h2>Card Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tortor nulla. Sed varius magna felis, eu tempus justo mattis a. Nunc ultrices fringilla eros sit amet efficitur. Pellentesque vitae sollicitudin tortor. Mauris aliquam euismod sem quis malesuada. Fusce vestibulum placerat vulputate.</p>
                    <div class="icons">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;