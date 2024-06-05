import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ArtikelPage() {
  // ... (rest of your code)

return (
        <div>
        <header style={{ width: "100%", height: "620px", backgroundColor: "#E38B54" }}>
            <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
            <Row>
                <Col>
                <div className="header-content" style={{ paddingTop: "110.5px" }}> {/* Added style here */}
                    <h3>
                    <span style={{ 
                        fontSize: "42px", 
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        marginBottom: "30px",
                        color:"#ffffff"
                    }}>
                        Cara merawat anjing agar tetap sehat
                    </span>
                    </h3>
                    <p style={{ 
                        fontSize: "28px", 
                        fontStyle: "normal", 
                        fontWeight: 400,
                        marginBottom: "50px",
                        color:"#ffffff"
                    }}>
                    Berikan Makan yang Bernutrisi. Cara merawat anak anjing hingga
                    dewasa adalah dengan memberikan makanan yang tepat. Tujuannya
                    agar perkembangan hewan dapat sesuai dengan usianya.
                    </p>
                    <button style={{ 
                        borderRadius: "15px",
                        background: "#D05440",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                    }}>Baca selengkapnya</button>
                </div>
                </Col>
                <Col>
                <img src="../public/komunitasHomepage.png" alt="Hero-img" className="header-image" />
                </Col>
            </Row>
            </div>
        </header>

        </div>
    );
}

export default ArtikelPage;
