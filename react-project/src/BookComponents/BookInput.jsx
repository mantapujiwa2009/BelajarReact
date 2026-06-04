import React from "react";

class BookInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            author: '',
            imageUrl: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onAuthorChangeEventHandler = this.onAuthorChangeEventHandler.bind(this);
        this.onImageURLChangeEventHandler = this.onImageURLChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addBook(this.state);

        this.setState({
            name: '',
            author: '',
            imageUrl: '',
        });
    }

    onNameChangeEventHandler(event){
        this.setState(() => {
            return {
                name: event.target.value
            }
        });
    }

    onAuthorChangeEventHandler(event){
        this.setState(() => {
            return {
                author: event.target.value
            }
        });
    }

    onImageURLChangeEventHandler(event){
        this.setState(() => {
            return {
                imageUrl: event.target.value
            }
        });
    }

    render(){
        return (
            <form className="book-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" 
                placeholder="Title"
                value={this.state.name}
                onChange={this.onNameChangeEventHandler}
                />
                <input type="text" 
                placeholder="Author"
                value={this.state.author}
                onChange={this.onAuthorChangeEventHandler}
                />
                <input type="text" 
                placeholder="Image URL"
                value={this.state.imageUrl}
                onChange={this.onImageURLChangeEventHandler}
                />
                <button type="submit">Tambah</button>
            </form>   

        )
    }
}

export default BookInput;