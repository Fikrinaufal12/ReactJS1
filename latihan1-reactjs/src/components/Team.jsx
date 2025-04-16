import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const teamMembers = [
  {
    name: "Bang Dodo",
    role: "UI/UX Designer",
    img: "https://media.suara.com/pictures/970x544/2025/02/18/28890-cristiano-ronaldo.jpg"
  },
  {
    name: "Bang Leo",
    role: "Frontend Developer",
    img: "https://akcdn.detik.net.id/customthumb/2015/06/19/73/messiafp.jpg?w=600&q=90"
  },
  {
    name: "Halland Bakery",
    role: "Backend Developer",
    img: "https://tmssl.akamaized.net/images/foto/galerie/erling-haaland-borussia-dortmund-2021-1628965181-68944.jpg"
  }
];

function Team() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 fw-bold">Tim Profesional Kami</h2>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md="4" key={index} className="mb-4">
            <Card 
              className="h-100 shadow-lg border-0"
              style={{
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <CardImg 
                top 
                src={member.img} 
                alt={member.name} 
                style={{ borderRadius: '12px 12px 0 0', height: '300px', objectFit: 'cover' }}
              />
              <CardBody 
                className="text-center"
                style={{ 
                  background: 'linear-gradient(135deg, #1e3c72, #2a5298, #00c6ff)',
                  color: 'white',
                  borderRadius: '0 0 12px 12px'
                }}
              >
                <CardTitle tag="h5" className="fw-bold">{member.name}</CardTitle>
                <CardText>{member.role}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team;
