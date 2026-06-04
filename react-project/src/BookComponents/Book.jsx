import React from "react";
import BookList from "./BookList";
import getData from "./Utils/data";
import BookInput from "./BookInput";


class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: getData()
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddBookHandler = this.onAddBookHandler.bind(this);

    }

    onDeleteHandler(id) {
    const books = this.state.books.filter((book) => book.id !== id);
    this.setState({ books });
    }

    onAddBookHandler({ name, author, imageUrl }) {
        this.setState((prevState) => {
            return {
                books: [
                    ...prevState.books,
                    {
                        id:+ new Date   (), name, author, imageUrl,
                    }
                ]
            }
        });
    }

    render() {
    return (
        <div className="book">
            <h1 className="head-title">Daftar Buku</h1>
            <BookInput addBook={this.onAddBookHandler} />
            <BookList books={this.state.books} onDelete={this.onDeleteHandler} />
        </div>
    )
    }
}

// function Book() {
//     const books = getData();
//     return (
//         <div className="book">
//             <h1 className="head-title">Daftar Buku</h1>
//             <BookList books={books} />
//         </div>
//     );
// }

export default Book;