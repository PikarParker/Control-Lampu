function saklar1() {
    let lampu1 = document.getElementById("lampu1");

    let saklarLampu1 = document.getElementById("saklarLampu1");

    if (saklarLampu1.checked) {
        console.log("lampu 1 nyala");
        lampu1.src = "assets/on.gif";
    } else {
        console.log("lampu 1 mati");
        lampu1.src = "assets/off.gif";
    }
}

function saklar2() {
    let lampu2 = document.getElementById("lampu2");

    let saklarLampu2 = document.getElementById("saklarLampu2");

    if (saklarLampu2.checked) {
        console.log("lampu 2 nyala");
        lampu2.src = "assets/on.gif";
    } else {
        console.log("lampu 2 mati");
        lampu2.src = "assets/off.gif";
    }
}

function saklar3() {
    let lampu3 = document.getElementById("lampu3");

    let saklarLampu3 = document.getElementById("saklarLampu3");

    if (saklarLampu3.checked) {
        console.log("lampu 3 nyala");
        lampu3.src = "assets/on.gif";
    } else {
        console.log("lampu 3 mati");
        lampu3.src = "assets/off.gif";
    }
}

function saklar4() {
    let lampu4 = document.getElementById("lampu4");

    let saklarLampu4 = document.getElementById("saklarLampu4");

    if (saklarLampu4.checked) {
        console.log("lampu 4 nyala");
        lampu4.src = "assets/on.gif";
    } else {
        console.log("lampu 4 mati");
        lampu4.src = "assets/off.gif";
    }
}

function saklarSemua() {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let semuaLampu = document.getElementById("semuaLampu");

    let saklarLampu1 = document.getElementById("saklarLampu1");
    let saklarLampu2 = document.getElementById("saklarLampu2");
    let saklarLampu3 = document.getElementById("saklarLampu3");
    let saklarLampu4 = document.getElementById("saklarLampu4");
    let saklarSemua = document.getElementById("saklarSemua");

    if (saklarSemua.checked) {
        console.log("semua lampu nyala");
        lampu1.src = "assets/on.gif";
        lampu2.src = "assets/on.gif";
        lampu3.src = "assets/on.gif";
        lampu4.src = "assets/on.gif";
        semuaLampu.src = "assets/on.gif";
    } else {
        console.log("semua lampu mati");
        lampu1.src = "assets/off.gif";
        lampu2.src = "assets/off.gif";
        lampu3.src = "assets/off.gif";
        lampu4.src = "assets/off.gif";
        semuaLampu.src = "assets/off.gif";
    }

}