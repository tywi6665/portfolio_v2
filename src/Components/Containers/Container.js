import React, { Children } from 'react';

const Container = ({ children }) => {
    return (
        <div class="container">
            {children}
        </div>
    );
}

export default Container;