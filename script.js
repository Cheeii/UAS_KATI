
function simpanTransaksi(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const produk = document.getElementById('produk').value;
    const jumlah = document.getElementById('jumlah').value;
    const tanggal = document.getElementById('tanggal').value;

    const data = { nama, produk, jumlah, tanggal };
    localStorage.setItem('transaksi', JSON.stringify(data));
    window.location.href = 'invoice.html';
}

function tampilkanInvoice() {
    const data = JSON.parse(localStorage.getItem('transaksi'));
    if (data) {
        document.getElementById('inv-nama').textContent = data.nama;
        document.getElementById('inv-produk').textContent = data.produk;
        document.getElementById('inv-jumlah').textContent = data.jumlah;
        document.getElementById('inv-tanggal').textContent = data.tanggal;
    }
}
