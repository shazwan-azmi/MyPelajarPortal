// Tunggu sehingga seluruh halaman siap dimuatkan
document.addEventListener('DOMContentLoaded', function() {
    
    // Dapatkan elemen canvas dari dashboard.html
    const ctx = document.getElementById('studentChart').getContext('2d');

    // Konfigurasi Chart.js
    const studentChart = new Chart(ctx, {
        type: 'bar', // Jenis graf: Palang (Bar)
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'],
            datasets: [{
                label: 'Jumlah Pelajar',
                data: [250, 220, 210, 195, 180, 190], // Data rekaan bermakna
                backgroundColor: '#4b1d52', // Warna utama: Ungu UiTM
                borderColor: '#ffc627',     // Warna sempadan: Emas UiTM
                borderWidth: 2,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Bilangan Pelajar'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Sembunyikan petunjuk sebab dah jelas
                }
            }
        }
    });
});