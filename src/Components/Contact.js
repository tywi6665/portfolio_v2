import React, { useState } from 'react';

const Contact = () => {

    const [isToggled, setIsToggled] = useState(false);

    return (
        <div className="contact" >
            <div id="card"
                className={!isToggled ? "contact-card" : "contact-card toggle"}
                onClick={() => setIsToggled(!isToggled)}
            >
                <div className="contact-front contact-face">
                    <div className="contact-name">
                        <p className="name">TYLER WINSTEAD</p>
                        <p className="title">WEB DEVELOPER</p>
                    </div>
                    <span></span>
                    <div className="contact-initials">
                        <p>TW</p>
                    </div>
                </div>
                <div className="contact-back contact-face">
                    <p>Based in Denver, CO USA
                    </p>
                    <div className="contact-info">
                        <div>
                            <p><a href="mailto:tyletcole@gmail.com?subject=I%20Liked%20Your%20Portfolio%20and%20Wanted%20to%20Reach%20Out" target="_blank" rel="noopener noreferrer">tyletcole@gmail.com</a><img src="./graphics/icons8-gmail.svg" alt="gmail" /></p>
                            <p>719 661 0645<img src="./graphics/icons8-cell-phone-64.png" alt="phone" /></p>
                        </div>
                        <div>
                            <p><img src="./graphics/icons8-website-64.png" alt="website" /><a href="https://www.tywi.dev" rel="noopener noreferrer">www.tywi.dev</a></p>
                            <p><img src="./graphics/icons8-github-wire.svg" alt="github" /><a href="https://github.com/tywi6665" target="_blank" rel="noopener noreferrer">github.com/tywi6665</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;