import Menu from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';
import data from "../../components/data.json"
   export default function listharga(){
    return (
    <left>
    <div>
    <Header/>
    <link rel="stylesheet" href="/css/bulma.css"/>
    <Menu />
    <b>Cek Nama Produk dan Harga di bawah ini :</b>
    <style jsx>
        {" background-color:  rgba(88, 207, 52, 0.863) "}
    </style>
    <style jsx>
        {" b{ color: black} text-align:center "}
    </style>
    <div style={{TextAlign: "center"}}>
        {
            data.map((data,index) =>
            <div key={index} style={{marginBottom: 50}}>
            <p>{data.model}{data.Harga}</p>
            </div>
            )
        }
    </div>
    <center>
    <Footer/>
    </center>
    </div>
    </left>
    )
   }