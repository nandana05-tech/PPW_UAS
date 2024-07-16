(function () { //function digunakan untuk Mencegah Pengiriman Data Tidak Valid
    'use strict' //menghindari kesalahan umum
    
    const forms = document.querySelectorAll('.needs-validation') /*document digunakan untuk titik masuk ke konten halaman web, 
    queryselectorall digunakan mendapatkan semua elemen yang ada pada class needs-validation*/
    
    Array.prototype.slice.call(forms) /*mengubah NodeList yang mirip array menjadi array sebenarnya.*/
    .forEach(function (form) { //foreach untuk mengeksekusi sebanyak satu kali
      form.addEventListener('submit', function (event) { //menambahkan function untuk mempermudah validasi
        if (!form.checkValidity()) {//form.checkValidatiy = validasi semua elemen input di dalam sebuah formulir HTML
          event.preventDefault() // Mencegah form dari pengiriman dan refresh halaman
          event.stopPropagation() //Menghentikan event agar tidak meneruskan capturing ke elemen-elemen lain.
        } else {
            event.preventDefault() // Mencegah form dari pengiriman dan refresh halaman
            alert('Selamat datang di filmku')//sebagai peringatan jika berhasil login/sign.in
            window.location.href = 'home.html'; //halaman yang akan dituju
          }
        
        form.classList.add('was-validated')/*classList adalah properti read-only yang 
        mengembalikan koleksi DOMTokenList langsung dari atribut kelas elemen. Ini kemudian 
        dapat digunakan untuk memanipulasi daftar kelas.*/
      }, false)
    })
    const akun = document.querySelectorAll('.list-group-item');/*const digunakan untuk deklarasi variabel
    , document digunakan untuk titik masuk ke konten halaman web, yang merupakan pohon DOM, dan 
    queryselectorall digunakan mendapatkan semua elemen yang ada pada class list-group item*/
    Array.prototype.slice.call(akun)/*mengubah NodeList yang mirip array menjadi array sebenarnya.*/
    .forEach(function(item) {/*foreach untuk mengeksekusi sebanyak satu kali, item adalah 
      nilai dari setiap elemen yang iterasi*/
        item.addEventListener('click', function(click) {//menentukan tindakan eksekusi jika mengklik
                const link = item.getAttribute('data-url');/*getAttribute digunakan untuk mendaatkan value pada suatu atribut*/
                if (link) {//kondisi yang ditentukan
                    alert('Selamat datang di filmku') //sebagai peringatan jika berhasil login
                    window.location.href = link; //halaman yang akan dituju
                }
        });
    });
    const forms2 = document.querySelectorAll('.validation') /*document digunakan untuk titik masuk ke konten halaman web, 
    queryselectorall digunakan mendapatkan semua elemen yang ada pada class needs-validation*/
    
    Array.prototype.slice.call(forms2) /*form adalah nilai dari setiap elemen yang iterasi*/
    .forEach(function (form) { //forach untuk mengeksekusi sebanyak satu kali
      form.addEventListener('submit', function (event) { //menambahkan function untuk mempermudah validasi
        if (!form.checkValidity()) {//form.checkValidatiy = validasi semua elemen input di dalam sebuah formulir HTML
          event.preventDefault() // Mencegah form dari pengiriman dan refresh halaman
          event.stopPropagation() //Menghentikan event agar tidak meneruskan capturing ke elemen-elemen lain.
        } else {
            event.preventDefault() // Mencegah form dari pengiriman dan refresh halaman
            alert('Terimakasih atas masukkannya')//sebagai peringatan jika berhasil memberi masukan
            window.location.href = 'home.html'; //halaman yang akan dituju
          }
        
        form.classList.add('was-validated')/*classList adalah properti read-only yang 
        mengembalikan koleksi DOMTokenList langsung dari atribut kelas elemen. Ini kemudian 
        dapat digunakan untuk memanipulasi daftar kelas.*/
      }, false)
    })
})()
