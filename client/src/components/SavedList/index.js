import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
import {Button} from "react-bootstrap";
import "./style.css";
// Exporting both BookList and BookListItem from this file

// RecipeList renders a bootstrap list item
export function SavedList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function SavedListItem(props) {
  const {
    id,
    image,
    authors,
    title,
    description,
    link
  } = props;
  const bookData = {
    id,
    image,
    authors,
    title,
    description,
    link
  }

  async function handleDelete(e){
    var bookId = e.target.getAttribute("value")
    console.log(bookId);
    API.deleteBooks(bookId)
    const response = await API.savedBooks();
    console.log(response)
    props.setBooks(response.data)
  }


  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>{authors}</p>
            <p>{description}</p>
            <a className = "view-a" rel="noreferrer noopener" target="_blank" href={link}>
              View
            </a>
            <Button className = "save-btn" variant = "outline-info" value={id} onClick = {handleDelete}>
              Delete
              </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}