// Funzione per leggere il file JSON
async function checkManutenzione() {
    try {
        const response = await fetch('/config.json'); // Leggi il file config.json
        const config = await response.json(); // Converti la risposta in JSON

        // Se la manutenzione è attiva, reindirizza a man.html
        if (config.is_manutenzione && !window.location.pathname.endsWith('/man.html')) {
            window.location.href = "/man.html";
        }
    } catch (error) {
        console.error("Errore durante il caricamento del file di configurazione:", error);
    }
}

// Esegui la funzione al caricamento della pagina
checkManutenzione();
