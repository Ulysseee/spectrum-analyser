import React, { useRef } from 'react';

const Screenshot = props => {
    const screenRef = useRef();

    const captureScreen = () => {
        fetch('http://localhost:9000/getImage', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({payload: document.querySelector('canvas').toDataURL()})
        })
    }

    return (
        <div ref={screenRef} onClick={captureScreen} className="screenshot">
            <span>Make & Save screenshot</span>
        </div>
    );
};

export default Screenshot;