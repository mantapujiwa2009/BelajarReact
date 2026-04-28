import React from "react";
import BookImage from "./BookImage";
import BookItem from "./BookItem";

function BookList({ books }) {
    return (
        <div className="book-list">
            {books.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    )
}

export default BookList;