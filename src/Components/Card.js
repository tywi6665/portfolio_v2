import React from 'react';
import ReactTooltip from 'react-tooltip';

const Card = ({ title, subTitle, description, icons, animation, links }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-screen">
                    <div className="screen">
                        <div className="browser-wrapper">
                            <div className="browser">
                                <div className="browser-top">
                                    <span className="red"></span>
                                    <span className="yellow"></span>
                                    <span className="green"></span>
                                </div>
                                <div className="video">
                                    <video autoPlay="true" loop>
                                        <source src={`./videos/${animation}.mp4`} type="video/mp4" />
                                    </video>
                                    <div className="shapes">
                                        <span className="circle"></span>
                                        <span className="short-bar"></span>
                                        <span className="long-bar"></span>
                                        <span className="red-bar"></span>
                                    </div>
                                </div>
                                <div className="browser-bottom"></div>
                            </div>
                        </div>
                    </div>
                    <div className="keyboard"></div>
                </div>
                <div className="card-info">
                    <div className="card-info-inner">
                        <h2>{title}</h2>
                        <h3>{subTitle}</h3>
                        <p>{description}</p>
                        <h4>Technologies/Frameworks Used:</h4>
                        <div className="icons">
                            {icons.map((icon, i) => (
                                <>
                                    <div className="icon" key={`${icon}-${i}`}>
                                        <img
                                            data-tip={icon[1]}
                                            data-for={`${icon}-${i}`}
                                            src={`./graphics/${icon[0]}`} />
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
                            <a href={links[0]} target="_blank">
                                <img
                                    data-tip="GitHub Repo"
                                    data-for={links[0]}
                                    src={`./graphics/icons8-github.svg`} />
                            </a>
                            <ReactTooltip
                                id={links[0]}
                                className="tooltip"
                                place="top"
                                type="light"
                                effect="solid"
                                multiline={false}
                            />
                        </div>
                        <div className="link">
                            <a href={links[1]} target="_blank">
                                <img
                                    data-tip="Live Link"
                                    data-for={links[1]}
                                    src={`./graphics/icons8-google-code.svg`} />
                            </a>
                            <ReactTooltip
                                id={links[1]}
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