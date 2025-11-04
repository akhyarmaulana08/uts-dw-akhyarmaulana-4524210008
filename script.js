// Ambil elemen input
const nameInput = document.getElementById('menuName');
const priceInput = document.getElementById('menuPrice');
const descInput = document.getElementById('menuDesc');
const imageInput = document.getElementById('menuImage');
const resetBtn = document.getElementById('resetBtn');

// Ambil elemen output (preview)
const previewName = document.getElementById('previewName');
const previewPrice = document.getElementById('previewPrice');
const previewDesc = document.getElementById('previewDesc');
const previewImage = document.getElementById('previewImage');

// Event listener untuk live update
nameInput.addEventListener('input', () => {
    previewName.textContent = nameInput.value || 'Nama Menu Akan Muncul Di Sini';
});

priceInput.addEventListener('input', () => {
    let harga = priceInput.value;
    previewPrice.textContent = harga ? `Rp ${Number(harga).toLocaleString('id-ID')}` : 'Rp 0';
});

descInput.addEventListener('input', () => {
    previewDesc.textContent = descInput.value || 'Deskripsi menu akan muncul di sini...';
});

imageInput.addEventListener('input', () => {
    const url = imageInput.value.trim();
    previewImage.src = url || 'https://via.placeholder.com/200';
});

// Tombol reset
resetBtn.addEventListener('click', () => {
    previewName.textContent = 'Nama Menu Akan Muncul Di Sini';
    previewPrice.textContent = 'Rp 0';
    previewDesc.textContent = 'Deskripsi menu akan muncul di sini...';
    previewImage.src = 'https://via.placeholder.com/200';
});
