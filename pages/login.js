export default function Login() {
  return (
    <div>
     <div className="container-fluid">
  <div className="row no-gutter">
    {/* The image half */}
    <div className="col-md-6 d-none d-md-flex bg-image" />
    {/* The content half */}
    <div className="col-md-6 bg-light">
      <div className="login d-flex align-items-center py-5">
        {/* Demo content*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 mx-auto">
              <h3 className="display-4">Login</h3>
              <p className="text-muted mb-4">Silahkan masukkan email dan password anda!</p>
              <form>
                <div className="form-group mb-3">
                  <input id="inputEmail" type="email" placeholder="Email" required autofocus className="form-control rounded-pill border-0 shadow-sm px-4" />
                </div>
                <div className="form-group mb-3">
                  <input id="inputPassword" type="password" placeholder="Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                </div>
                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
                <p>Belum punya akun? klik <a href="daftar">di sini</a>.</p>
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
