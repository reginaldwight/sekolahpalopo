function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "user" && pass === "password") {

        var loading = document.getElementById("loadingScreen");

        // Paksa browser render dulu
        loading.style.display = "flex";

        // Trick agar transisi KE-RENDER
        requestAnimationFrame(() => {
            loading.classList.add("show");
        });

        // Delay pindah halaman (JANGAN DIPERCEPAT)
        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 2200);

    } else {
        alert("Username atau password salah!");
    }
}
