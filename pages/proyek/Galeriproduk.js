import Menu from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';
import data from "../../components/data.json"
<link rel="stylesheet" href="/public/css/Product.css"/>
   export default () => (
   <left>
    <div>
      <Header/>
      <link rel="stylesheet" href="/css/bulma.css"/>
      <style jsx>
        {" background-color:  rgba(88, 207, 52, 0.863) "}
    </style>
    <Menu />
    <b>Galeri Produk</b>
    <style jsx>
        {"text-align:center "}
    </style>
    <header>
    <div style={{TextAlign: "center"}}>
        {
            data.map((data,index) =>
            <div key={index} style={{marginBottom: 50, }}>
            <img src={data.gbr} style={{float : "center"}}/>
            </div>
            )
        }
    </div>
    </header>
    <p>klik dibawah ini untuk mengetahui daftar harga setiap produk</p>
    <ul>
 <li><a href="/proyek/ListHarga">List Harga Produk</a></li>
 </ul>
    <br/>
    <p>Jika anda tertarik silahkan lakukan pengisian form</p>
 <ul>
 <li><a href="/proyek/pemesanan">Pemesanan</a></li>
 </ul>
 <p>Jika barang yang anda cari belum tersedia dalam galeri kami silahkan hubungi admin dibawah ini</p>
        <p>WhatsApp : 083847889439</p>
            <p>Email : JayaShop@gmail.com</p>
    <hr />
    <center>
    <Footer/>
    </center>
    </div>
    </left>
   )