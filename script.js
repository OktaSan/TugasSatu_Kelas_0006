const inputValue = document.getElementById("inputTask");
const btnTambahTodo = document.getElementById("btnTambahTodo");
const inputTanggal = document.getElementById("tanggal");
const daftarTugas = document.getElementById("listTugas");

btnTambahTodo.addEventListener("click",function(){

    if(inputValue.value === ""){
        alert("input tidak boleh kosong!");
        return;
    }

    const listBaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;

    const tanggal = inputTanggal.value;
    if (tanggal === "") {
        alert("Tanggal harus diisi!");
        return;
    }
    const item = document.createElement("span");
    item.classList.add("deadline");
    item.textContent = " deadline: " + tanggal;

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";

    btnEdit.addEventListener("click",function(){
        inputValue.value = span.textContent;

        daftarTugas.removeChild(listBaru);
    });

    btnHapus.addEventListener("click",function(){

        daftarTugas.removeChild(listBaru);
    });


    const status = document.createElement("status");
    status.textContent = " Progress ";

    const btnStatus = document.createElement("button");
    btnStatus.textContent = "Selesai";

    btnStatus.addEventListener("click", function () {

        if (status.textContent === " Progress ") {

            status.textContent = " Done ";
            btnStatus.textContent = "Progress";

        } else {

            status.textContent = " Progress ";
            btnStatus.textContent = "Selesai";

        }

    });

    listBaru.appendChild(span);
    listBaru.appendChild(item);
    listBaru.appendChild(status);
    listBaru.appendChild(btnStatus);
    listBaru.appendChild(btnEdit);
    listBaru.appendChild(btnHapus);

    daftarTugas.appendChild(listBaru);

    inputValue.value= "";
    inputTanggal.value="";
    inputValue.focus();

    

});










