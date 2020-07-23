import Menu from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';
import data from "../../components/data.json"
   export default function pemesanan(){
    return (
    <div>
    <center>
    <Header/>
    <link rel="stylesheet" href="/css/bulma.css"/>
    <Menu />
    <b>Pemesanan</b>
    <style jsx>
        {" background-color:  rgba(88, 207, 52, 0.863) "}
    </style>
    <style jsx>
        {" b{ color: black} text-align:center "}
    </style>
    <p>Untuk pemesanan silahkan isi form dibawah ini</p>
    <p>
        <label> Nama :</label>
        <input type="text" name="Nama" placeholder="Masukkan Nama Anda"></input>
    </p>
    <br/>
    <p>
        <label> Alamat :</label>
        <input type="text" name="Alamat" placeholder="Masukkan Alamat Anda"></input>
    </p>
    <br/>
    <p>
        <label> No Telepon :</label>
        <input type="text" name="No Telepon" placeholder="Masukkan Nomor Anda"></input>
    </p>
    <br/>
    <p>
        <label> Kode Pos :</label>
        <input type="text" name="Kode Pos" placeholder="Masukkan kode Anda"></input>
    </p>
    <br/>
    <button>Kirim</button>
    </center>
    <hr />
    <center>
    <Footer/>
    </center>
    </div>
    )
   }