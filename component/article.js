//@ts-nocheck
export default function Article(){
    return(
        <>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Rumah A <span className="text-muted">Classic Modern</span></h2>
            <p className="lead">Rumah Lantai 1 dengan luas bangunan 50</p>
            <p><a className="btn btn-secondary" href="rumaha">View details »</a></p>
          </div>
          <div className="col-md-5">
          <img src='/ha.png'/>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Rumah B <span className="text-muted">Asri</span></h2>
            <p className="lead">Lingkungan  yang Nyaman, Asri dan Bebas Banjir<br/>*LokasiI Sangat Strategis*</p>
            <p><a className="btn btn-secondary" href="rumahb">View details »</a></p>
          </div>
          <div className="col-md-5 order-md-1">
          <img src='/hi.png'/>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Rumah C <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Kamar Tidur 4, Kamar Mandi 3, Balkon Atas Luas, Carpot, Surat SHM</p>
            <p><a className="btn btn-secondary" href="rumahc">View details »</a></p>
          </div>
          <div className="col-md-5">
          <img src='/he.jpg'/>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Rumah D <span className="text-muted">Minimalis</span></h2>
            <p className="lead">rumah dengan 1 lantai</p>
            <p><a className="btn btn-secondary" href="rumahd">View details »</a></p>
          </div>
          <div className="col-md-5 order-md-1">
          <img src='/hu.jpg'/>
          </div>
        </div>
        <hr className="featurette-divider" />
        </>
    )
}