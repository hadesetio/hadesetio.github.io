const url = new URL(window.location.href);

// Mengambil nilai dari parameter "nama"
const params = new URLSearchParams(url.search);
const namaParams = params.get("nama");

function bagikanKeWhatsApp(url) {
    // Mengganti setiap spasi dengan %20
    var pesan = encodeURIComponent(url.replace(/\s/g, "%20"));
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + namaParams + "%0A" + pesan;
    window.open(whatsappUrl, '_blank');
}


const iconWhatup = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
<path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>`;
const iconSave = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
<path d="M11 2H9v3h2z"/>
<path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
</svg>`;


document.addEventListener("DOMContentLoaded", function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('nama');
    let link = window.location.href;

    if (nama) {
        const main = document.getElementById("main");
        document.getElementById("title").innerHTML = "Kartu Ucapan Online dari keluarga Besar "+namaParams;
        main.innerHTML = `
        <div class="floating-text">
                    <div class="mb-3 animate__animated animate__fadeInUp animate__delay-1s">
                        <h6 class="teksJos">Kami Keluarga Besar</h6>
                        <h5 class="teksJos fw-bold">${nama}</h5>
                        </div>
                        <p class="card-text mb-2 teksJos animate__animated animate__fadeInUp animate__delay-2s">Mengucapkan:</p>

                    <h1 class="ucapanan animate__animated animate__fadeInUp animate__delay-3s">Selamat Hari Raya Idul Fitri</h1>
                    <h1 class="ucapanan animate__animated animate__fadeInUp animate__delay-3s">1445 Hijriah</h1>
                    <h5 class="pt-4 text_arab animate__animated animate__fadeInUp animate__delay-4s">مِنَ الْعَائِدِيْن وَالْفَائِزِيْن</h5>
                    <h5 class="teksJos animate__animated animate__fadeInUp animate__delay-4s">Mohon Maaf Lahir dan Batin 🙏</h5>
                    <br>
                    <button type="button" onclick="bagikanKeWhatsApp('${link}')" class="animate__animated animate__bounceIn animate__delay-5s textBiasa btn border border-warning p-2 border-opacity-50 btn-outline-warning px-4 py-1">${iconWhatup} Kirim</button>
                    </div>
                `;
    } else {
        // Jika parameter nama tidak ditemukan, tampilkan form
        const form = document.createElement('form');
        form.innerHTML = `
        <div class="row">
        <div class="col">
        <a class="text-decoration-none" href="#">
        <img width="60" src="https://avatars.githubusercontent.com/u/77903323?v=4" class="rounded mx-auto d-block shadow-sm" alt="...">
        <h1 class="text-white">Github</h1>
        </a>
        </div>
        </div>
        <div class="row">
        <div class="col">
            <div class="card bg-dark bg-opacity-10 border-0 p-2">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="teksJos" for="nama" class="form-label">Nama Keluarga Besar</label>
                        <input type="text" id="nama" name="nama" class="textBiasa form-control mt-2" placeholder="masukan nama . . .">
                    </div>
                    <button type="submit" onclick="playM()" class="textBiasa btn border border-warning p-2 border-opacity-50 btn-outline-warning px-4 py-1">${iconSave} Simpan</button>
                    </div>
                    </div>
                </div>
            </div>
            `;
        document.querySelector('#main').appendChild(form);

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah form untuk melakukan pengiriman langsung

            const inputNama = document.getElementById('nama').value;
            if (inputNama.trim() !== '') {
                // Jika input nama tidak kosong, arahkan ke URL dengan nama sebagai parameter
                window.location.href = `?nama=${encodeURIComponent(inputNama)}`;
            } else {
                alert('Mohon masukkan nama Anda.');
            }
        });
    }
});
// Fungsi untuk menambahkan kelas "fs-4" ke semua elemen <h6>
function tambahkanKelasFs4PadaH6() {
    // Cek jika lebar viewport cukup besar untuk dianggap versi desktop
    if (window.innerWidth >= 1024) { // Misalnya, 1024px adalah batas untuk versi desktop
        // Temukan semua elemen <h6> di dalam dokumen
        const semuaH6 = document.querySelectorAll('h6');
        const semuaH5 = document.querySelectorAll('h5');
        const semuaH1 = document.querySelectorAll('h1');
        const semuaP = document.querySelectorAll('p');

        // Loop melalui setiap elemen <h6>
        semuaH6.forEach(elemen => {
            // Tambahkan kelas "fs-4" ke elemen tersebut
            elemen.classList.add('fs-2');
        });
        semuaH5.forEach(elemen => {
            // Tambahkan kelas "fs-4" ke elemen tersebut
            elemen.classList.add('fs-1');
        });
        semuaH1.forEach(elemen => {
            // Tambahkan kelas "fs-4" ke elemen tersebut
            elemen.classList.add('display-1');
        });
        semuaP.forEach(elemen => {
            // Tambahkan kelas "fs-4" ke elemen tersebut
            elemen.classList.add('fs-4','mt-5');
        });
    }
}

// Panggil fungsi tambahkanKelasFs4PadaH6() saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', tambahkanKelasFs4PadaH6);

const audio = document.getElementById("myAudio");
document.getElementById("playButton").addEventListener("click", function () {
    audio.play();
});
function checkIfTabActive() {
    if (document.hidden) {
        audio.pause(); // Jika tidak aktif, hentikan audio
    } else {
        audio.play(); // Jika aktif, putar audio
    }
}


document.addEventListener("visibilitychange", checkIfTabActive, false);
checkIfTabActive();
