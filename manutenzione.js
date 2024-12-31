const manutenzione = true;

async function checkManutenzione() {
    try {
        if (manutenzione && !window.location.pathname.endsWith('/man.html')) {
            window.location.href = "/man.html";
        }
    } catch (error) {
        console.error("Errore durante il caricamento del file di configurazione:", error);
    }
}

checkManutenzione();
