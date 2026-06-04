import React from "react";
import BookImage from "./BookImage";
import BookItem from "./BookItem";

function BookList({ books, onDelete }) {
    return (
        <div className="book-list">
            {books.map((book) => (
                <BookItem key={book.id} 
                {...book}
                id = {book.id}
                onDelete = {onDelete}
                 />
            ))}
        </div>
    )
}

export default BookList;