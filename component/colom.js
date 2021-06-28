//@ts-nocheck
export default function Colom(props){
    return(
            <div className="col-lg-4">
                   <img src={props.Imgurl} style={{width:200}}  />
              <h2>{props.Judul2}</h2>
              <p>{props.Isi}</p>
            </div>
    )
}