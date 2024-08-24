import React from 'react';

const intems = ['Apple', 'Banana', 'Cherry'];

function ListRenderer() {
    return (
        <ul>
            {intems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ListRenderer;