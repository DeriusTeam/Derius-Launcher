async function checkManutenzione() {
    try {
        const response = await fetch('config.json');
        const config = await response.json();

        if (config.is_manutenzione) {
            window.location.href = "man.html";
        }
    } catch (error) {
        console.error("Errore durante il caricamento del file di configurazione:", error);
    }
}

checkManutenzione();
