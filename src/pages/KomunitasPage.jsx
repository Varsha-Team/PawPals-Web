import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import komunitasCard from '../assets/img/komunitas/komunitasCard.png';

function KomunitasPage() {
    return (
        <Container className='komunitas py-5' >
            <Row>
            <Col>
                    <Card 
                    className="Card-Komunitas" 
                    style={{ 
                    width: '50rem', // Sesuai dengan desain Figma
                    padding: '9px 11px', // Padding internal card
                    background: '#F2BBB6',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    }}
                >
                    <Card.Body style={{ display: 'flex', alignItems: 'center', gap: '48px' }}> {/* Flexbox untuk mengatur layout */}
                    <img 
                        src={komunitasCard} 
                        style={{
                        width: '123px', 
                        height: '118px', 
                        borderRadius: '15px' 
                        }} 
                        alt="Komunitas Card"
                    />
                    <div style={{ flexDirection: 'column', gap: '10px' }}> {/* Kolom deskripsi */}
                        <div style={{ color: 'white', fontSize: '18px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                        Anjing dan Kucing
                        </div>
                        <Card.Title className='kategorikomunitas' style={{ color: '#D05440', fontSize: '28px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                        Halo semuanya, disini kami membahas hal menarik mengenai anjing dan kucing 
                        </Card.Title>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}> {/* Wrapper informasi anggota */}
                        <div style={{ color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                            13000 Member
                        </div>
                        <div style={{ padding: '6px', background: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <div style={{ width: '13px', height: '12px', position: 'relative' }}>
                            <div style={{ width: '13px', height: '11.20px', left: '0', top: '0.75px', position: 'absolute', background: '#756E6C' }}></div>
                            </div>
                            <div style={{ color: '#756E6C', fontSize: '14px', fontFamily: 'IBM Plex Sans', fontWeight: '600' }}>
                            4030
                            </div>
                        </div>
                        </div>
                    </div> 
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="Card-Information" style={{ 
                    width: '18rem', // Pertahankan lebar yang sama
                    background: '#F2BBB6',
                    borderRadius: '15px',
                    }}>
                    <Card.Body style={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: '10px',
                    }}>
                        <div style={{ color: '#D05440', fontSize: '28px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                        Forum Chat
                        </div>
                        <div style={{ display: 'flex', gap: '29px' }}>
                        <div style={{ color: 'white', fontSize: '18px', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                            <span style={{ fontWeight: '600' }}>1.2</span> <span style={{ fontWeight: '400' }}>posts</span>
                        </div>
                        <div style={{ color: 'white', fontSize: '18px', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                            <span style={{ fontWeight: '600' }}>60</span> <span style={{ fontWeight: '400' }}>members</span>
                        </div>
                        </div>
                        <Card.Text style={{ width: '250px', color: 'white', fontSize: '14px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '400' }}>
                        Komunitas forum yang didedikasikan untuk pemilik dan penggemar ras kucing. Bergabunglah dalam diskusi tentang ras, pelatihan, anak kucing, ulasan makanan, penyelamatan, dan banyak lagi.
                        </Card.Text>
                        <div style={{ 
                        padding: '5px 31px', 
                        background: '#D05440', 
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'flex-start', // Menyesuaikan posisi tombol
                        alignItems: 'center',
                        gap: '14px',
                        }}>
                        <div style={{ width: '24px', height: '24px', position: 'relative' }}>
                            <div style={{ width: '18px', height: '18px', left: '3px', top: '3px', position: 'absolute', background: 'white' }}></div>
                        </div>
                        <div style={{ color: 'white', fontSize: '16px', fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: '600' }}>
                            Join Community
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default KomunitasPage