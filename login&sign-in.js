(function () { //function digunakan untuk Mencegah Pengiriman Data Tidak Valid
    'use strict' //menghindari kesalahan umum
    
    const forms = document.querySelectorAll('.needs-validation') /*document digunakan untuk titik masuk ke konten halaman web, 
    queryselectorall digunakan mendapatkan semua elemen yang ada pada class needs-validation*/
    
    Array.prototype.slice.call(forms) /*form adalah nilai dari setiap elemen yang iterasi*/
    .forEach(function (form) { //forach untuk mengeksekusi sebanyak satu kali
      form.addEventListener('submit', function (event) { //menambahkan function untuk mempermudah validasi
        if (!form.checkValidity()) {//form.checkValidatiy = validasi semua elemen input di dalam sebuah formulir HTML
          event.preventDefault()
          event.stopPropagation()
        } else {
            event.preventDefault()
            alert('Selamat datang di filmku')
            window.location.href = 'home.html'; 
          }
        
        form.classList.add('was-validated')/*classList adalah properti read-only yang 
        mengembalikan koleksi DOMTokenList langsung dari atribut kelas elemen. Ini kemudian 
        dapat digunakan untuk memanipulasi daftar kelas.*/
      }, false)
    })
    document.addEventListener('DOMContentLoaded', function () {/*document digunakan untuk titik masuk ke konten halaman web, 
    function digunakan untuk Mencegah Pengiriman Data Tidak Valid*/
    const akun = document.querySelectorAll('.list-group-item');/*const digunakan untuk deklarasi variabel
    , document digunakan untuk titik masuk ke konten halaman web, yang merupakan pohon DOM, dan 
    queryselectorall digunakan mendapatkan semua elemen yang ada pada class list-group item*/
    akun.forEach(function(item) {/*forach untuk mengeksekusi sebanyak satu kali, item adalah 
    nilai dari setiap elemen yang iterasi*/
    item.addEventListener('click', function() {//menentukan tindakan eksekusi jika mengklik
        const link = item.getAttribute('data-url');/*getAttribute digunakan untuk mendaatkan value*/
            if (link) {
                alert('Selamat datang di filmku')
                window.location.href = link;
                }
            });
        });
    });
})()
