function ruangKeluarga() {
    let lampuKeluarga = document.getElementById("lampuKeluarga");
    let saklarLampuKeluarga = document.getElementById("saklarLampuKeluarga");
    if (saklarLampuKeluarga.checked) {
        console.log("lampu keluarga nyala");
        lampuKeluarga.src = "assets/on.gif";
    } else {
        console.log("lampu keluarga mati");
        lampuKeluarga.src = "assets/off.gif";
    }
}

function ruangMakan() {
    let lampuMakan = document.getElementById("lampuMakan");
    let saklarLampuMakan = document.getElementById("saklarLampuMakan");
    if (saklarLampuMakan.checked) {
        console.log("lampu Makan nyala");
        lampuMakan.src = "assets/on.gif";
    } else {
        console.log("lampu Makan mati");
        lampuMakan.src = "assets/off.gif";
    }
}

function ruangTamu() {
    let lampuTamu = document.getElementById("lampuTamu");
    let saklarLampuTamu = document.getElementById("saklarLampuTamu");
    if (saklarLampuTamu.checked) {
        console.log("lampu Tamu nyala");
        lampuTamu.src = "assets/on.gif";
    } else {
        console.log("lampu Tamu mati");
        lampuTamu.src = "assets/off.gif";
    }
}

function ruangTidur() {
    let lampuTidur = document.getElementById("lampuTidur");
    let saklarLampuTidur = document.getElementById("saklarLampuTidur");
    if (saklarLampuTidur.checked) {
        console.log("lampu Tidur nyala");
        lampuTidur.src = "assets/on.gif";
    } else {
        console.log("lampu Tidur mati");
        lampuTidur.src = "assets/off.gif";
    }
}