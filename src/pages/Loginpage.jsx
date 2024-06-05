import React from 'react'

function Loginpage() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{fontFamily: 'Poppins', sansSerif: true, background: '#ececec'}}>
            <div className="row border rounded-5 p-3 bg-white shadow box-area" style={{width: 930}}>

                {/* Left Box */}
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background: 'linear-gradient(131.38deg, #E38B54 1.06%, #FFFFFF 222.41%)', borderRadius: '20px'}}>
                <img src="../src/assets/img/logo-xs.png" alt="Logo" className=" mt-3" />
                <div style={{fontFamily: 'Courier New', fontWeight: 600}}>
                    <p className="text-white fs-2">Selamat Datang!</p>
                    <p className="text-white fs-2" style={{fontWeight: 500}}>PawPals</p> 
                </div>
                <img src="../src/assets/img/loginimage.png" alt="Image" className="img-fluid  mb-3" style={{width: 250}} />
                </div>

                {/* Right Box */}
                <div className="col-md-6 right-box" style={{padding: '40px 30px 40px 40px'}}>
                <div className="row align-items-center">
                    <h2 className="header-text mb-4">Login</h2>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Masukkan Email" style={{fontSize: 16}} />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Masukkan Password" style={{fontSize: 16}} />
                    </div>

                    <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="formCheck" />
                        <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Ingatkan Saya!</small></label>
                    </div>
                    <div className="forgot">
                        <small><a href="#" style={{color: '#ED6A09'}}>Lupa Password?</a></small> 
                    </div>
                    </div>

                    <button className="btn btn-lg btn-primary w-100 fs-6 mb-3" style={{backgroundColor: '#ED6A09'}}>Login</button>

                    <div className="row">
                    <small>Belum Punya Akun? <a href="/registerpage" style={{color: '#ED6A09'}}>Registrasi</a></small> 
                    </div>
                </div>
                </div>
            </div>
    </div>
    )
}

export default Loginpage