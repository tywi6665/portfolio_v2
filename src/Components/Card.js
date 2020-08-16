import React from 'react';
import ReactTooltip from 'react-tooltip';

const Card = ({ title, subTitle, description, icons, animation, links }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-screen">
                    <div id="screen"></div>
                    <div id="keyboard"></div>
                </div>
                <div className="card-info">
                    <div className="card-info-inner">
                        <h2>{title}</h2>
                        <h3>{subTitle}</h3>
                        <p>{description}</p>
                        <div className="icons">
                            {icons.map((icon, i) => (
                                <>
                                    <div className="icon" key={`${icon}-${i}`}>
                                        <img
                                            data-tip={icon[1]}
                                            data-for={`${icon}-${i}`}
                                            src={`./graphics/${icon[0]}.svg`} />
                                    </div>
                                    <ReactTooltip
                                        id={`${icon}-${i}`}
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
                    <div className="card-info-links">
                        <div className="link">
                            <img
                                data-tip="GitHub Repo"
                                data-for={`${links[0]}`}
                                src={`./graphics/icons8-github.svg`} />
                            <ReactTooltip
                                id={`${links[0]}`}
                                className="tooltip"
                                place="top"
                                type="light"
                                effect="solid"
                                multiline={false}
                            />
                        </div>
                        <div className="link">
                            <img
                                data-tip="Live Link"
                                data-for={`${links[1]}`}
                                src={`./graphics/icons8-google-code.svg`} />
                            <ReactTooltip
                                id={`${links[1]}`}
                                className="tooltip"
                                place="top"
                                type="light"
                                effect="solid"
                                multiline={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;