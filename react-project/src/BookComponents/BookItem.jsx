import React from "react";
import BookImage from "./BookImage";
import BookBody from "./BookBody";

function BookItem({ imageUrl, name, author }) {
    return (
        <div className="book-item">
            <BookImage imageUrl={imageUrl} />
            <BookBody name={name} author={author} />
        </div>
    )
}

export default BookItem;