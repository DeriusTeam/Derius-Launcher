// Variabile che controlla lo stato di manutenzione
const inManutenzione = false; // Imposta su `true` o `false` in base alle esigenze

// Ottieni il percorso della pagina corrente
const paginaCorrente = window.location.pathname.split("/").pop(); // Esempio: "index.html" o "man.html"

// Reindirizza l'utente solo se non è già nella pagina corretta
if (inManutenzione && paginaCorrente !== "man.html") {
    window.location.href = "man.html"; // Reindirizza a man.html se la manutenzione è attiva
} else if (!inManutenzione && paginaCorrente !== "index.html") {
    window.location.href = "index.html"; // Reindirizza a index.html se la manutenzione non è attiva
} else if (!inManutenzione && paginaCorrente !== "man.html") {
    window.location.href = "index.html"; // Reindirizza a index.html se la manutenzione non è attiva
}
