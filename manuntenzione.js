// manutenzione.js

// Variabile che controlla lo stato di manutenzione
const inManutenzione = true; // Imposta su `true` o `false` in base alle esigenze

// Funzione per reindirizzare l'utente
function reindirizzaUtente() {
    // Ottieni il percorso della pagina corrente
    const paginaCorrente = window.location.pathname.split("/").pop(); // Esempio: "index.html" o "man.html"

    // Controlla se la manutenzione è attiva
    if (inManutenzione) {
        // Se l'utente non è già su man.html, reindirizzalo
        if (paginaCorrente !== "man.html") {
            window.location.href = "man.html";
        }
    } else {
        // Se l'utente non è già su index.html, reindirizzalo
        if (paginaCorrente !== "index.html") {
            window.location.href = "index.html";
        }
    }
}

// Esegui la funzione di reindirizzamento al caricamento della pagina
reindirizzaUtente();
