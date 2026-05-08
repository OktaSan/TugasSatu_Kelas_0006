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

function tambahTugas(tugas, tanggalTugas) {
    const tugasBaru = {
        id: Date.now(),
        nama: tugas,
        tanggal: tanggalTugas,
        status: "Progress"
    }

    dataTugas.push(tugasBaru);
}

function resetForm() {
    inputTugas.value = "";
    inputTanggal.value = "";
    inputTugas.focus();
}

function renderingTugas() {
    daftarTugas.innerHTML = "";

    dataTugas.forEach(function (tugas) {
        const itemTugas = document.createElement("li");

        const namaTugas = document.createElement("div");
        namaTugas.classList.add("todo-item-title");
        namaTugas.textContent = tugas.nama;

        const tanggalTugas = document.createElement("span");
        tanggalTugas.classList.add("todo-item-date");
        tanggalTugas.textContent = "Tanggal: " + tugas.tanggal;

        const statusTugas = document.createElement("span");
        statusTugas.textContent = "Status: " + tugas.status;

        const buttonHapus = document.createElement("button");
        buttonHapus.textContent = "Hapus";

        const tombolStatus = document.createElement("button");

        if (tugas.status === "Progress") {
            tombolStatus.textContent = "Done";
        } else {
            tombolStatus.textContent = "Progress";
        }

        tombolStatus.addEventListener("click", function () {
            ubahStatusTugas(tugas.id);
        });

        buttonHapus.addEventListener("click", function () {
            hapusTugas(tugas.id);
        });


        itemTugas.appendChild(namaTugas);
        itemTugas.appendChild(tanggalTugas);
        itemTugas.appendChild(statusTugas);
        itemTugas.appendChild(buttonHapus);
        itemTugas.appendChild(tombolStatus);

        daftarTugas.appendChild(itemTugas)
    })
}

function hapusTugas(id) {
    dataTugas = dataTugas.filter(function (tugas) {
        return tugas.id !== id
    })
    renderingTugas()
}

function ubahStatusTugas(id) {
    const tugasDipilih = dataTugas.find(function (tugas) {
        return tugas.id === id;
    });

    if (tugasDipilih.status === "Progress") {
        tugasDipilih.status = "Done";
    } else {
        tugasDipilih.status = "Progress";
    }

    renderingTugas();
}

formTugas.addEventListener("submit", function (event) {
    event.preventDefault();

    const tugas = inputTugas.value.trim();
    const tanggalTugas = inputTanggal.value;

    const validForm = validasiForm(tugas, tanggalTugas)

    if (validForm == false) {
        return
    }

    tambahTugas(tugas, tanggalTugas)
    renderingTugas();
    resetForm();
})

