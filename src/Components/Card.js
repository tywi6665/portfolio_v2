import React from 'react';
import ReactTooltip from 'react-tooltip';

const Card = ({ title, description, icons, animation }) => {
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
                        {icons.map((icon, i) => (
                            <>
                                <div className="icon" key={`icon${i}`}>
                                    <img
                                        data-tip={icon[1]}
                                        data-for={`icon${i}`}
                                        src={`./graphics/${icon[0]}.svg`} />
                                </div>
                                <ReactTooltip
                                    id={`icon${i}`}
                                    className="tooltip"
                                    place="top"
                                    type="light"
                                    effect="solid"
                                    multiline={false}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;