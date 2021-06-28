export default function Rumaha() {
    return (
    <div>
        <center><img src='/ha.png'/><img src='/ha1.jpg' width='600px'/></center><p/>
        <h2 className="display-6 text-center mb-4">Rumah Tipe A</h2>
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{width: '30%'}}>Fasilitas</th>
                <th style={{width: '70%'}}>Ada/Tidak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">Public</th>
                <th scope="row" className="text-start">Public</th>
              </tr>
              <tr>
                <th scope="row" className="text-start">Public</th>
                <th scope="row" className="text-start">Public</th>
              </tr>
              <tr>
                <th scope="row" className="text-start">Public</th>
                <th scope="row" className="text-start">Public</th>
              </tr>
              <tr>
                <th scope="row" className="text-start">Public</th>
                <th scope="row" className="text-start">Public</th>
              </tr>
              <tr>
                <th scope="row" className="text-start">Public</th>
                <th scope="row" className="text-start">Public</th>
              </tr>
              <tr>
                <th scope="row" className="text-start">Public</th>
                <th scope="row" className="text-start">Public</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">RUMAH A</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">Rp. 800 <small className="text-muted fw-light">jt</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Dapatkan rumah impian anda</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-dark">Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
