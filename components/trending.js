import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="5cm.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>5 CM</Card.Text>
         <Card.Text>Bagus 8.9/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="dragonball.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Dragon ball</Card.Text>
         <Card.Text>Bagus 9.0/10</Card.Text>
         </div>
       
      

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="naruto.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Naruto</Card.Text>
         <Card.Text>Bagus 8.8/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="spiderman3.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Spiderman 3</Card.Text>
         <Card.Text>Bagus 9.2/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
   </Row>
</Container>

   )
}
export default Trending
