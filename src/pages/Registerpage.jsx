import React from 'react'
import { Image } from "react-bootstrap"

function Registerpage() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{fontFamily: 'Poppins', sansSerif: true, background: '#ececec'}}> 
            <div className="row border rounded-5 p-3 bg-white shadow box-area" style={{width: 930}}> 
    
            {/* Left Box */}
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background: 'linear-gradient(131.38deg, #E38B54 1.06%, #FFFFFF 222.41%)', borderRadius: '20px'}}> 
                <img src="../src/assets/img/logo-xs.png" alt="Logo" className=" mt-3" />
                <p className="text-white fs-2" style={{fontFamily: 'Courier New', fontWeight: 600}}>Lengkapi Data Anda!</p>
                <img src="../src/assets/img/loginimage.png" alt="Image" className="img-fluid  mb-3" style={{width: 250}} />
            </div>
    
            {/* Right Box */}
            <div className="col-md-6 right-box" style={{padding: '40px 30px 40px 40px'}}>
                <div className="row align-items-center">
                <h2 className="header-text mb-4">Registrasi</h2> 
    
                <div className="mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Nama Lengkap" style={{fontSize: 16}} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="email" placeholder="Masukkan Email" style={{fontSize: 16}} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Masukkan Sandi" style={{fontSize: 16}} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Masukkan Ulang Kata Sandi" style={{fontSize: 16}} />
                </div>
                
                <button className="btn btn-lg btn-primary w-100 fs-6 mb-3" style={{backgroundColor: '#ED6A09'}}>Registrasi</button>
    
                <div className="row">
                    <small>Sudah Punya Akun? <a href="/loginpage">Masuk</a></small> 
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }

export default Registerpage