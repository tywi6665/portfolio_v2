import React, { Children } from 'react';

const Container = ({ children, addedClass, addedID }) => {
    return (
        <div
            id={addedID}
            className={`container ${addedClass}`}
        >
            {children}
        </div>
    );
}

export default Container;