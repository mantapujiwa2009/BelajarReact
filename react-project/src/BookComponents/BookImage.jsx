import React from "react";

function BookImage({ imageUrl }) {
    return (
        <div className="book-image">
            <img className="image" src={imageUrl} alt="avatar"/>
        </div>
    )
}

export default BookImage;