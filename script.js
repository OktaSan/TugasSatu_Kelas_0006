const formTugas = document.getElementById("todoForm");
const inputTugas = document.getElementById("inputTask");
const inputTanggal = document.getElementById("tanggal");
const tombolSubmit = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

let dataTugas = [];
let idTugasYangDiEdit = null;

function validasiForm(tugas, tanggalTugas) {
    if (tugas === "") {
        alert("Nama tugas tidak boleh kosong WOI!")
        return false
    }

    if (tanggalTugas === "") {
        alert("Tanggal tugas harus diisi, JANGAN KOSONG!!!")
        return false
    }

    return true
}

formTugas.addEventListener("submit", function (event) {
    event.preventDefault();

    const tugas = inputTugas.value.trim();
    const tanggalTugas = inputTanggal.value;

    const validForm = validasiForm(tugas, tanggalTugas)

    if (validForm == false) {
        return
    }

    console.log("Data sesuai: ", tugas, tanggalTugas)
})

