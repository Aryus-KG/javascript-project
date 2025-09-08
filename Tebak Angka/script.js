let computer = Math.floor(Math.random() * 10) + 1;
let player;

for (let percobaan = 3; percobaan >= 0; percobaan--) {
  if (percobaan === 0) {
    console.log(
      `Percobaan Telah Habis dan Kamu Gagal Menebak. Angka Tersembunyi Adalah ${computer}`
    );
    break;
  }

  player = parseInt(
    prompt(`Percobaan Tersisa ${percobaan}
    Masukkan angka tebakan antara 1 - 10:`)
  );

  if (player < computer) {
    console.log(`Tebakanmu Terlalu kecil (tebakanmu ${player})`);
  } else if (player > computer) {
    console.log(`Tebakanmu Terlalu BESAR (tebakanmu ${player})`);
  } else if (player === computer) {
    console.log(`Selamat Tebakanmu Benar!
        Angka Tersembunyinya ${computer}`);
    break;
  } else {
    console.log(`Tolong Masukkan Angka Yang Valid`);
  }
}
