import Jumbotron from '../component/jumbotron'
import Colom from '../component/colom'
import Article from '../component/article'

export default function Home() {
  const Isikolom=[ 
    {imgurl:'/blegal.jpg',judul2:'Legalitas Aman',isi:'Anda tidak perlu takut dan khawatir akan permasalahan yang bisa terjadi dikemudian hari sebab semua dokumen legalitas sudah lengkap dan resmi.'},
    {imgurl:'/blokasi.jpg',judul2:'Lokasi Strategis',isi:'Berpusat di tengah kota Banyuwangi. Hanya butuh 5 menit dari kampus STIKOM PGRI Banyuwangi, 10 menit dari Pantai Boom, dan 5 menit dari taman kota.'},
    {imgurl:'/bpembangunan.jpg',judul2:'Langsung Bangun',isi:'Begitu Anda melakukan booking dan menyesaikan pembayaran DP, team profesional kami akan segera mulai proses pembangunan.'},
    {imgurl:'/btaman.jpg',judul2:'Taman',isi:'Play ground taman yang luas dan jogging track di sekitar taman.'},
    {imgurl:'/bmasjid.jpg',judul2:'Tempat Ibadah',isi:'Masjid yang megah dan bersih. Demi kenyamanan saat beribadah.'},
    {imgurl:'/bkolam.jpg',judul2:'Kolam Renang',isi:'Mempunyai 3 kolam renang untuk anak-anak, dewasa, dan kolam air hangat.'}

  ]
  return (
    <div>
        <Jumbotron />

        <div className="container marketing">
          <div className="row">
            {Isikolom.map((kolom)=>(
              <Colom Imgurl={kolom.imgurl} Judul2={kolom.judul2}
              Isi={kolom.isi}/>
            ))
            }
          </div>
            
          <Article />
          
        </div>
    </div>
  )
}
