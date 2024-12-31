// Variabile che controlla lo stato di manutenzione
const inManutenzione = true; // Imposta su `true` o `false` in base alle esigenze

// Reindirizza l'utente in base allo stato di manutenzione
if (inManutenzione) {
    window.location.href = "man.html"; // Reindirizza a man.html se la manutenzione è attiva
} else {
    window.location.href = "index.html"; // Reindirizza a index.html se la manutenzione non è attiva
}
