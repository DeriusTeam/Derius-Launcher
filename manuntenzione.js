async function checkManutenzione() {
    try {
        // Carica il file di configurazione
        const response = await fetch('/config.json');
        if (!response.ok) {
            throw new Error(`Errore ${response.status}: ${response.statusText}`);
        }

        const config = await response.json();

        // Verifica se la manutenzione è attiva
        if (config.is_manutenzione && !window.location.pathname.endsWith('/man.html')) {
            window.location.href = "/man.html";
        } else if (!config.is_manutenzione && !window.location.pathname.endsWith('/index.html')) {
            window.location.href = "/index.html";
        }
    } catch (error) {
        console.error("Errore durante il caricamento del file di configurazione:", error);
    }
}

// Esegui la funzione di controllo
checkManutenzione();
