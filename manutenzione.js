// manutenzione.js

// Funzione per reindirizzare l'utente
function reindirizza() {
    // Controlla se il launcher è in manutenzione
    const inManutenzione = true; // Cambia questo valore in base allo stato di manutenzione

    if (inManutenzione) {
        // Reindirizza a man.html
        window.location.href = "https://deriusteam.github.io/Derius-Launcher/man.html";
    } else {
        // Reindirizza a index.html
        window.location.href = "https://deriusteam.github.io/Derius-Launcher/index.html";
    }
}

// Esegui la funzione di reindirizzamento al caricamento della pagina
reindirizza();
