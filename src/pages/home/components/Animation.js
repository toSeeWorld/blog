import React from 'react';

export default function (props) {
    return (
        <>
            <div {...props} className={`slide${props.index}`}>

            </div>
        </>
    )
}