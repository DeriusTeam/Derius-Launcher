// Variabile che controlla lo stato di manutenzione
const inManutenzione = false; // Imposta su `true` o `false` in base alle esigenze

// Ottieni l'URL completo della pagina corrente
const urlCorrente = window.location.href;

// Funzione per reindirizzare l'utente
function reindirizzaSeNecessario() {
    if (inManutenzione && !urlCorrente.includes("man")) {
        window.location.href = "man.html"; // Reindirizza a man.html se la manutenzione è attiva
    } else if (!inManutenzione && urlCorrente.includes("man")) {
        window.location.href = "index.html"; // Reindirizza a index.html se la manutenzione non è attiva
    }
}

// Esegui la funzione di reindirizzamento
reindirizzaSeNecessario();
