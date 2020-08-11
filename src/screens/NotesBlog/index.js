import React, { Component } from "react";
// Material UI
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
// CSS
import "./NotesBlog.css";
const notes = [
  { title: "My first note", content: "This is an amazing note!" },
  { title: "My first note", content: "This is an amazing note!" },
];
class NotesBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteContent: "",
    };
  }
  render() {
    const { noteTitle, noteContent } = this.state;
    const UINotes = notes.map(({ title, content }, index) => (
      <ListItem className="List-item">
        <ListItemText primary={title} secondary={content} />
      </ListItem>
    ));
    return (
      <>
        <Container maxWidth="md">
          <List dense={false}>{UINotes}</List>
        </Container>
        <Container maxWidth="md">
          <form>
            <TextField
              className="input"
              value={noteTitle}
              label="Titulo"
              variant="outlined"
            />
            <TextField
              className="input"
              value={noteContent}
              label="Contenido"
              variant="outlined"
            />
          </form>
        </Container>
      </>
    );
  }
}
export default NotesBlog;
