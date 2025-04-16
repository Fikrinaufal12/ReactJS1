import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Contact() {
  return (
    <Container className="mt-5">
      <div 
        className="mx-auto shadow-lg p-4 rounded" 
        style={{ maxWidth: '600px', backgroundColor: '#ffffff' }}
      >
        <div 
          className="text-center p-3 rounded mb-4"
          style={{
            background: 'linear-gradient(135deg, #1e3c72, #2a5298, #00c6ff)',
            color: 'white'
          }}
        >
          <h2 className="fw-bold mb-0">Hubungi Kami</h2>
          <p className="mb-0">Kami siap membantu Anda kapan saja!</p>
        </div>

        <Form>
          <FormGroup>
            <Label for="name" className="fw-semibold">Nama</Label>
            <Input type="text" id="name" placeholder="Masukkan nama Anda" />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="fw-semibold">Email</Label>
            <Input type="email" id="email" placeholder="Masukkan email Anda" />
          </FormGroup>
          <FormGroup>
            <Label for="message" className="fw-semibold">Pesan</Label>
            <Input type="textarea" id="message" placeholder="Tulis pesan Anda di sini" rows="5" />
          </FormGroup>
          <Button 
            color="primary" 
            className="w-100 fw-bold mt-3"
            style={{
              padding: '12px 0',
              fontSize: '1.1rem',
              transition: '0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004aad'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0d6efd'}
          >
            Kirim Pesan
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
