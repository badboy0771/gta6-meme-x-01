# GTA 6: 13 Tahun vs 13 Menit — make.fun meme entry

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/badboy0771/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/badboy0771/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entri untuk bounty make.fun **gta6-meme-x-01** ("Post a GTA 6 meme on X", total hadiah
$500, deadline 23 Nov 2026 21:00 WIB). Akun make.fun: **@vivid-owl-21**, play code:
`makefun-gerbil-violin-falconer`.

## Memenya

Meme dua panel, 1024×1024 PNG, dibuat di session ini (setelah bounty dibuka 19 Nov 2026
21:00 WIB):

- **Panel atas — "AKU: NUNGGU GTA 6 / SELAMA 13 TAHUN":** seorang gamer sudah jadi
  tengkorak ber-hoodie di kursi gaming, masih memegang controller. Di dinding: poster
  sunset Vice City yang memudar dan kalender yang tahun-tahunnya dicoret semua,
  sarang laba-laba, tumpukan kaleng minuman energi. Tiga belas tahun sejak GTA V —
  yang nunggu keburu jadi fosil duluan.
- **Panel bawah — "AGEN AI-KU: 13 MENIT. / SUDAH DIBAYAR DI MAKE.FUN":** robot agen AI
  yang imut merayakan di jalanan neon Vice City/Leonida saat uang dan koin emas
  menghujani jalan. Di dalam scene-nya, berdiri di jalan basah yang memantulkan
  neon, ada **ghost make.fun yang asli** — hantu putih bermata sparkle memegang koin
  bintang magenta — bukan stiker tempel di pojok, tapi bagian dari adegannya.

Jokenya: yang nunggu GTA 6 itu manusia — 13 tahun dan belum juga main. Yang kerja
buat make.fun itu agen AI — 13 menit, sudah dibayar beneran. Kontras yang sama
inilah yang dijual teks postingannya.

## Teks postingan X (draft)

> Nunggu GTA 6 selama 13 tahun. Agen AI-ku cuma nunggu 13 menit — dan sudah dibayar
> beneran di make.fun. Kamu dan agen AI-mu juga bisa dapat uang beneran di sana:
> https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-gerbil-violin-falconer

Teksnya pendek (di bawah 1.100 byte yang dibaca juri), berisi joke-nya, ajakan mencoba
make.fun (orang dan agen AI-nya bisa dapat uang beneran), link bounty, tag @makefunai,
dan play code. Meme-nya sendiri diposting sebagai gambar pertama dari akun X publik
@pejuangwor22.

## Cara meme dibuat

1. Dua scene digenerate AI (1024×1024, tanpa teks — teks hasil AI sering rusak):
   adegan tengkorak gamer dan adegan robot agen di jalanan neon Vice City.
2. Ghost make.fun diambil ASLI dari press kit resmi https://make.fun/press/
   (`mark-1024.png`, 1024×1024) — bukan digambar ulang AI — supaya maskotnya
   dikenali persis.
3. Script `composite.py` (di luar repo ini, di folder kerja) menyusun semuanya dengan
   PIL: kedua scene dipotong jadi panel 1024×512, ghost di-resize proporsional ke
   300 px, dimiringkan sedikit, diberi bayangan kontak, lalu ditempel KE DALAM panel
   bawah; caption digambar dengan DejaVu Sans Bold ukuran besar + outline hitam +
   band gelap tembus pandang, sehingga tetap terbaca saat gambar dikecilkan ke
   480×480 (ukuran yang dilihat juri).
4. Verifikasi (dilakukan 19 Nov 2026, sebelum commit ini):
   - Meme 1024×1024 dilihat langsung: ghost make.fun besar dan dikenali (hantu
     putih, mata sparkle, koin bintang magenta), kedua caption terbaca jelas,
     tidak ada elemen yang terpotong.
   - Downscale 480×480 (ukuran yang dilihat juri) dicek juga: ghost + kedua
     caption tetap dikenali dan terbaca.
   - `main.ts` dijalankan seperti grader dari working directory asing
     (`cd /tmp`, `MAKEFUN_BOT_DIR=<repo> MAKEFUN_OUTPUT_DIR=/tmp/out`):
     exit 0, `out/POST.json` sama byte dengan `POST.json` repo (masih
     placeholder — benar untuk fase ini).
   - Draft teks postingan: 244 byte, di bawah batas ~1.100 byte yang dibaca juri.

## Yang ada di repo ini

- `main.ts` — program entri (ditulis ulang di fase ini): membaca `POST.json`
  dari root repo lalu menulis byte yang sama persis ke `/output/POST.json`.
  Dijalankan seperti grader dari working directory asing dan lolos (exit 0,
  `out/POST.json` sama byte dengan `POST.json` repo).
- `POST.json` — alamat postingan X yang asli:
  `{"url": "https://x.com/pejuangwor22/status/2123439778221973968"}`.
- `README.md` — dokumen ini.
- `LICENSE` — MIT.

## Status

Meme selesai (`meme.png`, 1024×1024) dan sudah LIVE di X dari @pejuangwor22:
https://x.com/pejuangwor22/status/2123439778221973968 — `POST.json` sudah berisi
URL postingan itu, dan entri siap di-submit oleh koordinator.
