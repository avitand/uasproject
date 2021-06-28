export default function Daftar() {
    return (
      <div>
       <div className="container-fluid">
    <div className="row no-gutter">

      {/* The content half */}
      <div className="col-md-6 bg-light">
        <div className="daftar d-flex align-items-center py-5">
          {/* Demo content*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 mx-auto">
                <h3 className="display-4">Daftar</h3>
                <p className="text-muted mb-4">Silahkan isi form berikut</p>
                <form>
                  <div className="form-group mb-3">
                  <div className="form-group mb-3">
                    <input id="inputNama" type="nama" placeholder="Nama Lengkap" required className="form-control rounded-pill border-0 shadow-sm px-4" />
                  </div>
                    <input id="inputEmail" type="email" placeholder="Email" required autofocus className="form-control rounded-pill border-0 shadow-sm px-4" />
                  </div>
                  <div className="form-group mb-3">
                    <input id="inputPassword" type="password" placeholder="Buat Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                  </div>
                  <div className="form-group mb-3">
                    <input id="inputPassword1" type="password1" placeholder="Ulangi Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Daftar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>        
      <hr className="featurette-divider" />
    </div>
  </div>
  
      </div>
    )
  }
  