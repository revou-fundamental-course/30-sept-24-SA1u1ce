function konversi_celcius(){
    let c = document.getElementById("celcius").value;
    if (c == ""){
        alert("Form tidak boleh ada yang kosong");
        return;
    }

    let f = (c*9/5) + 32;
    document.getElementById("hfahrenheit").value = f;

    let kalkulasi = `Rumus: (C × 9/5) + 32\n` +
                    `Substitusi: (${c} × 9/5) + 32\n` +
                    `Hasil: ${f}\u00B0 Fahrenheit`;
    document.getElementById("calc").value = kalkulasi;
}

function konversi_fahrenheit(){
    let f = document.getElementById("fahrenheit").value;
    if (f == ""){
        alert("Form tidak boleh ada yang kosong");
        return;
    }

    let c = (5/9)*(f - 32);
    document.getElementById("hcelcius").value = c;

    let kalkulasi = `Rumus: 5/9 × (C - 32)\n` +
                    `Substitusi: 5/9 × (${f} - 32)\n` +
                    `Hasil: ${c}\u00B0 Celsius`;
    document.getElementById("calf").value = kalkulasi;
}

function reset(){
    document.getElementById("hfahrenheit").value = "";   
    document.getElementById("calc").value = ""; 
}

