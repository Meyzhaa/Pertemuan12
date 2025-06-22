import React, { useState, useEffect } from "react";
import SearchSection from "./components/SearchSection";
import BookGrid from "./components/BookGrid";
import PopularBooksSection from "./components/PopularBooksSection";
import booksData from "./data/booksData";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("title");
  const [ourBooksDisplayed, setOurBooksDisplayed] = useState([]);

  const popularBooks = [
    booksData.find((b) => b.id === "book1"),
    booksData.find((b) => b.id === "book5"),
    booksData.find((b) => b.id === "book6"),
  ].filter(Boolean);

  const filterOurBooks = () => {
    let filtered = booksData;

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((book) => {
        switch (filterOption) {
          case "title":
            return book.title.toLowerCase().includes(lowerCaseSearchTerm);
          case "author":
            return book.author.toLowerCase().includes(lowerCaseSearchTerm);
          case "publisher":
            return book.publisher.toLowerCase().includes(lowerCaseSearchTerm);
          case "titleYear":
            return (
              book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
              book.year.includes(lowerCaseSearchTerm)
            );
          case "year2018":
            return book.year === "2018";
          default:
            return (
              book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
              book.author.toLowerCase().includes(lowerCaseSearchTerm) ||
              book.publisher.toLowerCase().includes(lowerCaseSearchTerm) ||
              book.year.includes(lowerCaseSearchTerm)
            );
        }
      });
    } else {
      if (filterOption === "year2018") {
        filtered = filtered.filter((book) => book.year === "2018");
      } else {
        filtered = booksData;
      }
    }

    setOurBooksDisplayed(filtered);
  };

  useEffect(() => {
    filterOurBooks();
  }, [searchTerm, filterOption]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  return (
    <div className="container">
      {/* Kolom Pencarian dan Filter Utama */}
      <SearchSection
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        filterOption={filterOption}
        onFilterChange={handleFilterChange}
      />
      {/* Bagian "Popular" */}
      {/* PopularBooksSection sudah memiliki judul "Popular" di dalamnya */}
      <PopularBooksSection popularBooks={popularBooks} />
      {/* Bagian "Our Books" */}
      <h2
        style={{
          marginTop: "40px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
        }}
      >
        Our Books
      </h2>
      <BookGrid books={ourBooksDisplayed} />{" "}
      {/* Menggunakan state yang difilter */}
    </div>
  );
};

export default App;
