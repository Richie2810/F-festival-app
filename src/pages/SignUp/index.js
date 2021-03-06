import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("")
  const [isVIP, setIsVIP] = useState(false)
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, age, isVIP));

    setEmail("");
    setPassword("");
    setName("");
    setAge("")
    setIsVIP(false)
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5" style={{backgroundColor:'#557A95'}}>
        <h1 className="mt-5 mb-5">Buy a Ticket</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Full name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            value={age}
            onChange={event => setAge(parseInt(event.target.value))}
            type="text"
            placeholder="Age"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicIsVip">
          <Form.Label>Would you Like to Buy a VIP ticket</Form.Label>
          <Form.Check
            value={isVIP}
            onChange={event => setIsVIP(event.target.checked)}
            type="checkbox"
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login" style={{color:"black"}}>Click here to log in</Link>
      </Form>
    </Container>
  );
}
