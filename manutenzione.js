// Variabile per lo stato di manutenzione
const is_manutenzione = true; // Cambia in false per disattivare la manutenzione

// Funzione per gestire la manutenzione
function gestisciManutenzione() {
    // Se la manutenzione è attiva e non siamo già su man.html, reindirizza a man.html
    if (is_manutenzione && !window.location.pathname.endsWith('/man.html')) {
        console.log("Manutenzione attiva, reindirizzamento a man.html");
        window.location.href = "/man.html";
    }

    // Se la manutenzione è disattivata e siamo su man.html, reindirizza a index.html
    if (!is_manutenzione && window.location.pathname.endsWith('/man.html')) {
        console.log("Manutenzione disattivata, reindirizzamento a index.html");
        window.location.href = "/index.html";
    }
}

// Esegui la funzione al caricamento della pagina
gestisciManutenzione();

// Controlla lo stato di manutenzione ogni 5 secondi (opzionale)
setInterval(gestisciManutenzione, 5000); // 5000 millisecondi = 5 secondi
