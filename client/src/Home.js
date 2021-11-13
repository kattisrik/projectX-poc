import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { postData } from "./utils/ApiService";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    path: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(state);
    setState({ path: "", message: "" });
    console.log("path", state.path, "message", state.message);
  };

  return (
    <Container className="App">
      <h2 className="header">Invitation - Project X POC</h2>
      <br />
      <h6 className="header" style={{ fontStyle: "italic" }}>
        Enter the path and message
      </h6>
      <br />
      <Form className="form" onSubmit={handleSubmit} method="POST" inline>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Label for="email" className="label">
              Path :
            </Label>
            <Input
              className="input"
              type="text"
              name="path"
              id="path"
              placeholder="Enter path"
              value={state.path}
              required
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </FormGroup>
        </Col>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Label for="age" className="label">
              Message :
            </Label>
            <Input
              type="text"
              name="message"
              id="message"
              value={state.message}
              placeholder="Enter message"
              required
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </FormGroup>
        </Col>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="button">
          <Button color="primary">Publish</Button>
        </Col>
      </Form>
    </Container>
  );
}

export default App;
