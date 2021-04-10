import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query +"&key=AIzaSyAFYx6tyogs7A5SpckXvmIX-8SDlq5nsKw");
  },
  saveBook: function(bookData){
    return axios.post("/api/books",{bookData})
  },
  savedBooks: function(){
    return axios.get("/api/books")
  }
};
