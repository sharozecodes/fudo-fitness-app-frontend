import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components_css/Form.css";

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          placeholder="Enter email"
          className="form-custom"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          id="password"
          type="password"
          placeholder="Password"
          className="form-custom"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
