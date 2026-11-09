// --- Komponen 5: View Switcher (Hierarki Datar) ---
const homeView = document.getElementById('home-view');
const createView = document.getElementById('create-view');
const fabAdd = document.getElementById('fab-add');
const btnBack = document.getElementById('btn-back');

// Beralih ke form Create Post
fabAdd.addEventListener('click', () => {
    homeView.classList.remove('active');
    homeView.classList.add('hidden');
    createView.classList.remove('hidden');
    createView.classList.add('active');
});

// Kembali ke Home Feed (Aksi panah "<-")
btnBack.addEventListener('click', () => {
    createView.classList.remove('active');
    createView.classList.add('hidden');
    homeView.classList.remove('hidden');
    homeView.classList.add('active');
});

// --- Interaksi Chip Filter ---
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
    chip.addEventListener('click', () => {
        // Hapus status active dari semua chip
        chips.forEach(c => c.classList.remove('active'));
        // Tambahkan ke yang diklik
        chip.classList.add('active');
    });
});

// --- Validasi Form Pembuatan Ajakan (Create Post) ---
const createPostForm = document.getElementById('create-post-form');
createPostForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    // Ambil data (Bisa dikembangkan lebih lanjut)
    const judul = document.getElementById('judul').value;
    
    // Memberikan feedback instan (< 30 detik UX goal)
    alert(`Berhasil! Ajakan mabar "${judul}" telah dipublikasikan.`);
    
    // Reset form dan kembali ke Home Feed
    createPostForm.reset();
    btnBack.click();
});