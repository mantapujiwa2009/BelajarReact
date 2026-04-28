import Biodata from "./Biodata";

function Data() {
    const dataUser = {
        nama : "Bing",
        umur : 16,
        alamat : "Sleman, DIY"
    };
return (
    <div>
        <Biodata
        nama={dataUser.nama}
        umur={dataUser.umur}
        alamat={dataUser.alamat}
        />
    </div>
    );
}

export default Data
