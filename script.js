function Temperature() {
    var nomberEntre = parseFloat(document.getElementById('temperature-input').value);
    var unit = document.getElementById('unit-selector').value;
    
    if (isNaN(nomberEntre)) {
        alert("Veuillez entrer une température valide !");
        return;
    }

    
    var STC = 0;     
    var etaMet= "";    
    var Image = "";

    
    if (unit === 'C') {
        STC = (nomberEntre * 9/5) + 32; 
    } else {
        STC = (nomberEntre - 32) * 5/9; 
    }

  
    if (STC <= 0) {
        etaMet = "Temps froid, il neige !";
        Image = "Asset/image/neige.jpg";
    } else if (STC > 0 && STC <= 10) {
        etaMet = "Temps froid avec du brouillard.";
        Image = "Asset/image/brouillard.jpg";
    } else if (STC > 10 && STC <= 20) {
        etaMet = "Temps frais, ciel dégagé.";
        Image = "Asset/image/claire.jpg";
    } else if (STC > 20 && STC <= 30) {
        etaMet = "Temps agréable, un peu chaud.";
        Image = "Asset/image/solie.jpeg";
    } else {
        etaMet = "Il fait très chaud aujourd'hui.";
        Image = "Asset/image/chaleur.webp";
    }

    document.getElementById('tempera-conver').textContent = `Converti : ${STC.toFixed(2)} ${unit === 'C' ? '°F' : '°C'}`;
    document.getElementById('statu').textContent = etaMet;
    document.getElementById('weather-img').src = Image;
}
