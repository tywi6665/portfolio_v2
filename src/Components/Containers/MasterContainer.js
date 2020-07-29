import React, { Children } from 'react';

const MasterContainer = ({ children }) => {
    return (
        <div className="master-container">
            {children}
        </div>
    );
}

export default MasterContainer;