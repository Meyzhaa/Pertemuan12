import React from "react";
import BookItem from "./BookItem";

const BookGrid = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookItem
          key={book.id}
          imageUrl={book.imageUrl}
          title={book.title}
          author={book.author}
          publisher={book.publisher}
          year={book.year}
        />
      ))}
    </div>
  );
};

export default BookGrid;
