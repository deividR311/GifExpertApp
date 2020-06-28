import React from 'react';

export const GiftGridItem = ({ img }) => {
    return (
        <div className="card animate__animated animate__bounce animate__fadeIn">
            <img src={ img.url } alt={ img.title }></img>
            <p> { img.title } </p>
        </div>
    )
}
