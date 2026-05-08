const formTugas = document.getElementById("todoForm");
const inputTugas = document.getElementById("inputTask");
const inputTanggal = document.getElementById("tanggal");
const tombolSubmit = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

let dataTugas = [];
let idTugasYangDiedit = null;

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
    idTugasYangDiedit = null;
    tombolSubmit.textContent = "Tambah Tugas";
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

        const buttonEdit = document.createElement("button")
        buttonEdit.textContent = "Edit"
        buttonEdit.addEventListener("click", function () {
            editTugas(tugas.id)
        })

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

        const actionTugas = document.createElement("div")
        actionTugas.classList.add("todo-actions")

        actionTugas.appendChild(tombolStatus);
        actionTugas.appendChild(buttonEdit);
        actionTugas.appendChild(buttonHapus);

        itemTugas.appendChild(namaTugas);
        itemTugas.appendChild(tanggalTugas);
        itemTugas.appendChild(statusTugas);
        itemTugas.appendChild(actionTugas);

        daftarTugas.appendChild(itemTugas)
    })
}

function hapusTugas(id) {
    const yakinHapus = confirm("Yakin ingin menghapus tugas ini?")

    if (yakinHapus == false) {
        return
    }

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

function editTugas(id) {
    const tugasDipilih = dataTugas.find(function (tugas) {
        return tugas.id === id;
    })

    if (tugasDipilih === undefined) {
        return;
    }

    inputTugas.value = tugasDipilih.nama;
    inputTanggal.value = tugasDipilih.tanggal;
    idTugasYangDiedit = tugasDipilih.id;
    tombolSubmit.textContent = "Simpan Perubahan";
}

function simpanEditTugas(namaBaru, tanggalBaru) {
    const tugasDipilih = dataTugas.find(function (tugas) {
        return tugas.id === idTugasYangDiedit
    })

    if (tugasDipilih === undefined) {
        return
    }

    tugasDipilih.nama = namaBaru;
    tugasDipilih.tanggal = tanggalBaru;
}

formTugas.addEventListener("submit", function (event) {
    event.preventDefault();

    const tugas = inputTugas.value.trim();
    const tanggalTugas = inputTanggal.value;

    const validForm = validasiForm(tugas, tanggalTugas)

    if (validForm == false) {
        return
    }

    if (idTugasYangDiedit === null) {
        tambahTugas(tugas, tanggalTugas);
    } else {
        simpanEditTugas(tugas, tanggalTugas);
    }
    renderingTugas();
    resetForm();
})