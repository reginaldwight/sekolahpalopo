// =============================
// INIT MAP (PALOP0)
// =============================
var map = L.map('map').setView([-2.992, 120.196], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// =============================
// DATA SMA (EDIT SESUAI DATA ASLI)
// =============================
var smaData = [
    {
        nama: "SMA Negeri 1 Palopo",
        lat: -2.99452,
        lng: 120.18755
    },
    {
        nama: "SMA Negeri 2 Palopo",
        lat: -2.95176,
        lng: 120.18141
    },
    {
        nama: "SMA Negeri 3 Palopo",
        lat: -3.00577,
        lng: 120.20033
    },
    {
        nama: "SMA Negeri 4 Palopo",
        lat: -2.96776,
        lng:  120.18502
    },
    {
        nama: "SMA Negeri 5 Palopo",
        lat:-3.02581,
        lng:120.20133
    },
    {
        nama: "SMA Negeri 6 Palopo",
        lat:-2.99699,
        lng:120.18736
    },
    {
        nama: "MAN Palopo",
        lat: -2.96916,
        lng: 120.18130
    },
    {
        nama: "SMK Negeri 1 Palopo",
        lat:-2.99261,
        lng:120.18569
    },
    {
        nama: "SMK Negeri 2 Palopo",
        lat:-2.96906,
        lng:120.17921
    },
    {
        nama: "SMK Negeri 3 Palopo",
        lat:-2.90896,
        lng:120.16978
    }
];

// =============================
// MARKER GROUP
// =============================
var markerGroup = {};
var listContainer = document.querySelector(".school-list");

// =============================
// BUAT MARKER + LIST SIDEBAR
// =============================
smaData.forEach(function(sekolah, index) {

    // Marker
    var marker = L.marker([sekolah.lat, sekolah.lng])
        .addTo(map)
        .bindPopup("<b>" + sekolah.nama + "</b>");

    markerGroup[index] = marker;

    // Sidebar list
    var li = document.createElement("li");
    li.innerText = sekolah.nama;

    li.addEventListener("click", function () {

        // Hilangkan active sebelumnya
        document.querySelectorAll(".school-list li")
            .forEach(el => el.classList.remove("active"));

        // Aktifkan yang diklik
        li.classList.add("active");

        // Zoom & fokus ke peta
        map.setView([sekolah.lat, sekolah.lng], 16);
        marker.openPopup();
    });

    listContainer.appendChild(li);
});
document.querySelector(".nav-search").addEventListener("keyup", function () {
    var keyword = this.value.toLowerCase();
    var items = document.querySelectorAll(".school-list li");

    items.forEach(function(item) {
        item.style.display = item.innerText.toLowerCase().includes(keyword)
            ? "block"
            : "none";
    });
});


// =============================
// LOGOUT
// =============================
function logout() {
    window.location.href = "login.html";
}
function showLogoutModal() {
    document.getElementById("logoutModal").classList.add("show");
}

function hideLogoutModal() {
    document.getElementById("logoutModal").classList.remove("show");
}

function confirmLogout() {
    window.location.href = "login.html";
}
