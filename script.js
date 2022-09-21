function daftar(){
    var a = document.getElementById("namaPasien").value;
    var b = document.getElementById("tempat").value;
    var c = document.getElementById("tanggal").value;
    var d = document.getElementById("jenisKelamin").value;
    var e = document.getElementById("alamat").value;
    var f = document.getElementById("RT").value;
    var g = document.getElementById("RW").value;
    var h = document.getElementById("provinsi").value;
    var i = document.getElementById("kecamatan").value;
    var j = document.getElementById("desa").value;
    var k = document.getElementById("HP").value;
    var l = document.getElementById("kodePos").value;
    var m = document.getElementById("agama").value;
    var n = document.getElementById("pendidikan").value;
    var o = document.getElementById("pekerjaan").value;
    var p = document.getElementById("hubungan").value;
    var q = document.getElementById("namaPJ").value;
    var r = document.getElementById("pendidikanPJ").value;
    var s = document.getElementById("pekerjaanPJ").value;
    var t = document.getElementById("namaTTD").value;

    // HURUF
    var huruf = /^[A-Za-z]+$/; 

    // ANGKA
    var angka = /^[0-9]+$/;

    if (a==''||b==''||c==''||d==''||e==''||f==''||l==''||k==''||j==''||i==''||h==''||g==''||m==''||n==''||o==''||p==''||q==''||r==''||t==''||s==''){
        alert("Tolong diisi semuanya");
    }
    else if(!huruf.test(a) || !huruf.test(q) || !huruf.test(t)){
        alert("nama cuman huruf");
    }
    else if(!huruf.test(j) || !huruf.test(h) || !huruf.test(i))
    {
        alert("Tempat lahir, desa/kelurahan, provinsi, kecamatan cuman huruf")
    }
    else if(!angka.test(k) || !angka.test(l))
    {
        alert("kodepos dan no HP hanya angka saja");
    }
}


// MAX TANGGAL IS TODAY
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById('tanggal').setAttribute("max", today);