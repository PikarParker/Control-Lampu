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