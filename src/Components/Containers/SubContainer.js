import React, { Children } from 'react';

const SubContainer = ({ children }) => {
    return (
        <div className="sub-container">
            {children}
        </div>
    );
}

export default SubContainer;