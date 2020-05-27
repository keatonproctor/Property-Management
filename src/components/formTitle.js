import React from 'react';

export function formTitle(props) {
    const { className, text } = props;
    return (
        <h1 className={`${className} form-title`}>{text}</h1>
    )
}