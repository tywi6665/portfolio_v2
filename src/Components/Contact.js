import React, { useState } from 'react';

const Contact = () => {

    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled)
        const card = document.getElementById("card")
        card.classList.toggle("toggle")
    }

    return (
        <div className="contact" >
            <div id="card" className="contact-card" onClick={() => toggle()}>
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
                    {/* <div className="contact-image">
                    <img src="./graphics/me.jpg" alt="me" />
                </div> */}
                    <div className="contact-info">
                        <p><a href="mailto:tyletcole@gmail.com?subject=I%20Liked%20Your%20Portfolio%20and%20Wanted%20to%20Reach%20Out" target="_blank" rel="noopener noreferrer">Email Me!!</a></p>
                        <p><a href="https://github.com/tywi6665" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;