import Menu from '../components/menu';
import Header  from '../components/header';
import Footer  from '../components/footer';
import data from "../components/data.json"
import Head from 'next/head';
<link rel="stylesheet" href="/public/css/Product.css"/>
import { Component } from 'react';

   const Home = () =>(
   <div>
      <Head>
         <title> Jaya Olshop</title>
         <meta name='viewport' content="width=device-width, initial-scale=1.0"/>
         <link rel="stylesheet" href="/css/bulma.css"/>
      </Head>
   <Header/>
   <Menu />
   <style jsx>
        {" background-color:  rgba(88, 207, 52, 0.863) "}
    </style>
    <center>
    <p><h2><b>SELAMAT DATANG DI JAYA OLSHOP</b></h2></p>
            <p>Jaya Olshop Menyediakan Semua kebutuhan yang anda perlukan silahkan cek barang yang anda inginkan di bawah ini</p>
            <ul>
               <li><a href="/proyek/Galeriproduk">Galeri Produk</a></li>
            </ul>
            <p>Anda juga dapat menjadi Reseller resmi kami, silahkan klik dibawah ini untuk mendaftarkan diri anda</p>
            <ul>
               <li><a href="/proyek/Reseller">Daftar Reseller</a></li>
            </ul> 
   </center>   
    <center>
    <Footer/>
    </center>
    </div>
   )
   export default Home;