import React from "react";

function DeleteButton({ id, onDelete }) {
    return(
        <button className="book-button-delete" onClick={() => onDelete(id)}>
        x    
        </button>
    )
}

export default DeleteButton;