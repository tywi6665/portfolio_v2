import React, { Children } from 'react';

const MasterContainer = ({ children }) => {
    return (
        <div class="master-container">
            {children}
        </div>
    );
}

export default MasterContainer;