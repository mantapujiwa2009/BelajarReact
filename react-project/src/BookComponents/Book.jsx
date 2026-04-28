import React from "react";
import BookList from "./BookList";
import getData from "./Utils/data";

function Book() {
    const books = getData();
    return (
        <div className="book">
            <h1 className="head-title">Daftar Buku</h1>
            <BookList books={books} />
        </div>
    );
}

export default Book;