import React, { Children } from 'react';

const Container = ({ children, addedClass }) => {
    return (
        <div className={`container ${addedClass}`}>
            {children}
        </div>
    );
}

export default Container;