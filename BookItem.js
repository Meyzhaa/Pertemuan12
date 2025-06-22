import React from "react";

const BookItem = ({
  imageUrl,
  title,
  author,
  publisher,
  year,
  customClass,
}) => {
  return (
    <div className={`book-item ${customClass || ""}`}>
      <img src={process.env.PUBLIC_URL + "/" + imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>
        {publisher} <span className="year">{year}</span>
      </p>
    </div>
  );
};

export default BookItem;
