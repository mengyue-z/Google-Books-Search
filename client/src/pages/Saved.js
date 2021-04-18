import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Navigation";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { SavedList, SavedListItem } from "../components/SavedList";
import { Container, Row, Col } from 'react-bootstrap';
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
      <h2>Saved Books</h2>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <SavedList>
                {books.map(book => {
                  return (
                    <SavedListItem
                      key={book._id}
                      id={book._id}
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      image={book.image}
                      link={book.link}
                      setBooks={setBooks}
                    />
                  );
                })}
              </SavedList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;
