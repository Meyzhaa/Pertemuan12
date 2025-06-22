import React from "react";
import BookItem from "./BookItem";

const PopularBooksSection = ({ popularBooks }) => {
  return (
    <div className="popular-books-section">
      <div className="popular-books-header">
        {/* Mengembalikan radio button "Title" */}
        <h2>Popular</h2>
      </div>
      <div className="popular-books-grid">
        {popularBooks.map((book) => (
          <BookItem
            key={book.id}
            imageUrl={book.imageUrl}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            year={book.year}
            customClass="popular-book-item"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularBooksSection;
