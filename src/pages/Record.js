import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";



function Record() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (


    <>
      
      <Container>
        <Row>
          <Card style={{ width: '50rem', margin: 'auto', marginBottom: 20, marginTop: 20 }}>
            <Card.Body>
              <Card.Title>Онлайн-запись</Card.Title>












              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Имя</Form.Label>
                  
                  <Form.Control
                    required
                    type="text"
                    placeholder="Имя"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Пожалуйста, введите свое имя.
                  </Form.Control.Feedback>
                </Form.Group>











                <Form.Group controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Пожалуйста, введите свой Email.
                  </Form.Control.Feedback>
                </Form.Group>













                <Form.Group controlId="validationCustom01">
                  <Form.Label>Услуга</Form.Label>
                  <Form.Select>
                    <option value="1">Окрашивание</option>
                    <option value="2">Стрижка</option>
                    <option value="3">Ботокс</option>
                  </Form.Select>
                </Form.Group>











                <Form.Group controlId="validationCustom03">
                  <Form.Label>Категория</Form.Label>
                  <Form.Select>
                    <option value="1">Тонирование</option>
                    <option value="2">Стрижка</option>
                    <option value="2">Стрижка женская</option>
                    <option value="2">Стрижка каре</option>
                    <option value="2">Стрижка боб</option>
                    <option value="3">Ботокс</option>
                  </Form.Select>
                </Form.Group>









                <Form.Group controlId="validationCustom04">
                  <Form.Label>Мастер</Form.Label>
                  <Form.Select>
                    <option value="1">Леся</option>
                    <option value="2">Аля</option>
                    <option value="3">Лизка</option>
                  </Form.Select>
                </Form.Group>








                <Form.Group controlId="validationCustom05">
                  <Form.Label>Дата</Form.Label>
                  <Form.Control type="date" placeholder="Дата" id="Дата" name="Дата" required />
                  <Form.Control.Feedback type="invalid">
                    Пожалуйста, выберите дату.
                  </Form.Control.Feedback>
                </Form.Group>




                <Button type="submit" variant="info" style={{  marginTop: '15px' }}>Записаться</Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default Record