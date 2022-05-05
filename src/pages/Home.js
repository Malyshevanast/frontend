import "./home.css"
import ho from '../assets/ho.png'
import ocr from '../assets/ocr.png'
import ctr from '../assets/ctr.png'
import bot from '../assets/bot.png'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomePage = () => (
  <>
    <img src={ho} class="img-fluid" alt="Фотография" width="100%" height="100%"></img>

    <h1>НАШИ УСЛУГИ</h1>
    <Container style={{ margin: 'auto' }}>
      <Row >
        <Col>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src={ocr} />
            <Card.Body>
              <Card.Title className='title'>Окрашивание</Card.Title>
              <Card.Text className='text'>
              Сложно встретить девушку или женщину, которая не красила бы волосы. Современное окрашивание волос – процесс интересный, дающий прекрасные результаты. Тем более что на сегодняшний день существуют самые разнообразные виды, оттенки и модные тенденции.
              </Card.Text>
              <Card.Text className='price'>
              <b>От 1000P</b>
              </Card.Text>
              <Button variant="info" href="/service">Поподробнее</Button>
            </Card.Body>
          </Card>
        </Col>
   

        <Col>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src={ctr} />
            <Card.Body>
              <Card.Title className='title'>Стрижка</Card.Title>
              <Card.Text className='text'>
              Одним из самых сложных, распространенных и интересных видов работ современного парикмахерского искусства является стрижка волос. Несомненно, основа будущей прически, то  является красивой прической.
              </Card.Text>
              <Card.Text className='price'>
              <b>От 350P</b>
              </Card.Text>
              <Button variant="info" href="/service">Поподробнее</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src={bot} />
            <Card.Body>
              <Card.Title className='title'>Ботокс</Card.Title>
              <Card.Text className='text'>
              Ботокс для волос – это результативная обновляющая процедура для ослабленных, безжизненных локонов. После сеанса истонченные, ломкие с секущимися концами становятся упругими, внутреннюю силу и здоровый внешний вид. 
              </Card.Text>
              <Card.Text className='price'>
                 <b>От 1500P</b>
              </Card.Text>
              <Button variant="info" href="/service">Поподробнее</Button>
            </Card.Body>
          </Card>
        </Col>
     </Row>
    </Container>
    
    <h1>НАШИ МАСТЕРА</h1>

    <Container style={{ margin: 'auto' }}>
      <Row >
        <Col>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src={g1} />
            <Card.Body>
              <Card.Title className='title'>Леся</Card.Title>
              <Card.Text className='text1'>
              Имею лицензию 4 года. <br/>Я работаю в Splendore 2 года.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   

        <Col>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src={g2} />
            <Card.Body>
              <Card.Title className='title'>Аля</Card.Title>
              <Card.Text className='text1'>
              Имею лицензию 5 лет.<br/>Я работаю в Splendore 2 года.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '20rem', margin: 'auto' }}>
            <Card.Img variant="top" src={g3} />
            <Card.Body>
              <Card.Title className='title'>Лизка</Card.Title>
              <Card.Text className='text1'>
              Имею лицензию 3 лет.<br/> Я работаю в Splendore 2 года.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     </Row>
    </Container>


    <h1>ОТЗЫВЫ</h1>

    <h1 id="contacts">КОНТАКТЫ</h1>


    <Container style={{ margin: 'auto', padding: '15px' }}>
      <Row >
        <Col>
          <Card style={{ width: '30rem', margin: 'auto' }}>
            <Card.Body>
              <Card.Title className='title'>Ждем Вас!</Card.Title>
              <Card.Text className='text1'>
              Железнодорожная ул., д. 18<br />3(55)086-22-51<br />C 10:00-20:00<br /><a href="mailto:hair@gmail.com">Почта</a><br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     </Row>
    </Container>



  </>
)

export default HomePage;