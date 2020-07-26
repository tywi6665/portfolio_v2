import React, { Children } from 'react';

const SubContainer = ({ children }) => {
    return (
        <div class="sub-container">
            {children}
        </div>
    );
}

export default SubContainer;