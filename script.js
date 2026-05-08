const formTugas = document.getElementById("todoForm");
const inputTugas = document.getElementById("inputTask");
const inputTanggal = document.getElementById("tanggal");
const tombolSubmit = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

let dataTugas = [];
let idTugasYangDiEdit = null;

formTugas.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Button berhasil di tekan!")
})