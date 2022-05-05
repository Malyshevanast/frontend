import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "./service.css"

function Service() {
  return (
    <>



      <Container>
        <Row>
          <Col md={6} sm={6} />
          <Col md={9} sm={12}></Col>
          <Card style={{ width: '50rem', margin: 'auto', marginBottom: 20, marginTop: 20 }}>
            <Card.Body>
              <Card.Title>НАШИ УСЛУГИ</Card.Title>
              <Table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Окрашивание</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="naz">Тонирование</td>
                    <td className="pri">1000р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                  <tr>
                    <td className="naz">Мелирование</td>
                    <td className="pri">1200р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                  <tr>
                    <td className="naz">Балаяж</td>
                    <td className="pri">1500р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                </tbody>





                <thead>
                  <tr>
                    <th></th>
                    <th>Стрижка</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="naz">Каре</td>
                    <td className="pri">350р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                  <tr>
                    <td className="naz">Двойное каре</td>
                    <td className="pri">650р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                  <tr>
                    <td className="naz">Боб</td>
                    <td className="pri">700р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                </tbody>









                <thead>
                  <tr>
                    <th></th>
                    <th>Ботокс</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="naz">Холодный</td>
                    <td className="pri">2000р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                  <tr>
                    <td className="naz">Горячий</td>
                    <td className="pri">1500р</td>
                    <td className="but"><Button type="submit" variant="info" href="/record">Записаться</Button></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Col md={9} sm={0} />
        </Row>
      </Container>

    </>
  )
}

export default Service