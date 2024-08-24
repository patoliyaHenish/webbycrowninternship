import React, { useState } from 'react';

function SimpleForm() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };  

    return (
        <div>
            <input type='text' value={inputValue} onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default SimpleForm;