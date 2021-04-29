import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addNewsFeedItem } from '../../store/news/actions';
import { selectToken } from '../../store/user/selectors';

export default function NewsFeedForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [img, setImg] = useState("")
    
    const dispatch = useDispatch()
    const token = useSelector(selectToken);
    const history = useHistory();


    function submitForm(event) {
        event.preventDefault();
    
        dispatch(addNewsFeedItem(title, description, link, img));
        // console.log(title, description, link, img)
    
        setTitle("");
        setDescription("");
        setLink("");
        setImg("")
      }

      useEffect(() => {
        if (token === null) {
          history.push("/");
        }
      }, [token, history]);

    return (
        <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5 pb-2" style={{backgroundColor:'#557A95'}}>
        <h1 className="mt-5 mb-5">News Feed Form</h1>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={event => setTitle(event.target.value)}
            type="text"
            placeholder="Title"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicDesc">
            <Form.Label>description</Form.Label>
          <Form.Control
            value={description}
            onChange={event => setDescription(event.target.value)}
            type="text"
            placeholder="Description"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicLink">
          <Form.Label>Link</Form.Label>
          <Form.Control
            value={link}
            onChange={event => setLink(event.target.value)}
            type="text"
            placeholder="Link"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicImg">
          <Form.Label>Image</Form.Label>
          <Form.Control
            value={img}
            onChange={event => setImg(event.target.value)}
            type="text"
            placeholder="Img"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
