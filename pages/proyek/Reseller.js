import Menu from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';
import data from "../../components/data.json"
   export default function reseller(){
    return (
    <center>
    <div>
    <Header/>
    <link rel="stylesheet" href="/css/bulma.css"/>
    <Menu />
    <b>Pendaftaran Reseller</b>
    <style jsx>
        {" background-color:  rgba(88, 207, 52, 0.863) "}
    </style>
    <style jsx>
        {" b{ color: black} text-align:center "}
    </style>
    <p>Untuk pendaftaran silahkan isi form dibawah ini</p>
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
        <label> Rekening :</label>
        <input type="text" name="Kode Pos" placeholder="Masukkan kode Anda"></input>
    </p>
    <br/>
    <p>
        <label> Kode Bank :</label>
        <input type="text" name="Kode Pos" placeholder="Masukkan kode Anda"></input>
    </p>
    <br/>
    <button>Daftar</button>
    <hr />
    <center>
    <Footer/>
    </center>
    </div>
    </center>
    )
   }