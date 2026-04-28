import React from "react";

function Biodata({nama, umur, alamat})  {
    return (
        <div>
        <h1>Biodata</h1>
        <p>Nama: {nama}</p>
        <p>Umur: {umur} tahun</p>
        <p>Alamat: {alamat}</p>
        </div>
    )
}

export default Biodata;