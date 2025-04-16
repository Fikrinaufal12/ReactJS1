import React from 'react';
import { Container, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const heroStyle = {
    height: '100vh',
    background: 'linear-gradient(135deg, #1e3c72, #2a5298, #00c6ff)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    maxWidth: '500px',
    marginBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  };

  const buttonStyle = {
    fontSize: '1.1rem',
    padding: '12px 28px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  };

  return (
    <div style={heroStyle}>
      <Container>
        <h1 style={titleStyle}>Selamat Datang di PT SelaluJayaparts</h1>
        <p style={subtitleStyle}>
          Kami menyediakan berbagai sparepart motor berkualitas tinggi untuk kebutuhan kendaraan Anda. Aman, terpercaya, dan bergaransi.
        </p>
        <Button color="warning" size="lg" style={buttonStyle}>
          Lihat Produk Kami
        </Button>
      </Container>
    </div>
  );
}

export default Home;
