import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-image">
                <img src="./graphics/me.jpg" alt="me" />
            </div>
            <div className="contact-info">
                <p><a href="mailto:tyletcole@gmail.com?subject=I%20Liked%20Your%20Portfolio%20and%20Wanted%20to%20Reach%20Out" target="_blank" rel="noopener noreferrer">Email Me!!</a></p>
                <p><a href="https://tywi6665.github.io/" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
            </div>
        </div>
    );
}

export default Contact;