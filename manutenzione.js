// Variabile che controlla lo stato di manutenzione
const inManutenzione = false; // Imposta su `true` o `false` in base alle esigenze

// Ottieni l'URL completo della pagina corrente
const urlCorrente = window.location.href;

// Reindirizza l'utente solo se non è già nella pagina corretta
if (inManutenzione && !urlCorrente.endsWith("/man.html")) {
    window.location.href = "man.html"; // Reindirizza a man.html se la manutenzione è attiva
} else if (!inManutenzione && urlCorrente.endsWith("/man.html")) {
    window.location.href = "index.html"; // Reindirizza a index.html se la manutenzione non è attiva
}
