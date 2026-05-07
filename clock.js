// Sayfa yüklendiğinde saati hemen başlatmak için bir fonksiyon oluşturuyoruz
function updateClock() {
    const now = new Date();
    
    // Saat, dakika ve saniyeyi alıp 2 haneli formatlıyoruz
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // HTML içeriğini güncelle
    const clockElement = document.getElementById('Clock');
    if (clockElement) {
        clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
}

// Her saniye (1000ms) fonksiyonu çalıştır
setInterval(updateClock, 1000);

// Sayfa ilk açıldığında 1 saniye beklememek için hemen çağır
window.onload = updateClock;
