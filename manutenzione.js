const manutenzione = true;

async function checkManutenzione() {
        if (manutenzione && !window.location.pathname.endsWith('/man.html')) {
            window.location.href = "/man.html";
        }
}

checkManutenzione();
