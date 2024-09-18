function bentuksegitiga(alas) {
    for (let i = 1; i <= alas; i++) {
      // Menghitung jumlah spasi di awal setiap baris
      const spaces = ' '.repeat(alas - i);
      // Menghitung jumlah bintang pada setiap baris
      const stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
  // Contoh penggunaan:
  const tinggiSegitiga = 5;
  bentuksegitiga(tinggiSegitiga);