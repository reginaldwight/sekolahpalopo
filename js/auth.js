function authProcess() {
    const loading = document.getElementById("loadingScreen");

    // Paksa tampil dulu
    loading.style.display = "flex";

    // Paksa browser render transisi
    requestAnimationFrame(() => {
        loading.classList.add("show");
    });

    // Delay ke dashboard
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 2200);
}
