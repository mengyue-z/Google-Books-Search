import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

function Saved() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
      getSavedBooks();
  }, [])
  const getSavedBooks = ()=> {
    API.savedBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Jumbotron />
      <Container>
        <Row>
          <h2>Saved Books</h2>

          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <BookList>
                {books.map(book => {
                  return (
                    <BookListItem
                      key={book.title}
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      image={book.image}
                      link={book.link}
                    />
                  );
                })}
              </BookList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;
