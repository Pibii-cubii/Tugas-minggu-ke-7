# Tugas 2 - MabarZone UI/UX Implementation

Implementasi komponen antarmuka dari wireframe **MabarZone (Platform Connectivity Mahasiswa ITTS)** menggunakan HTML, CSS, dan JavaScript Murni. Diadaptasi langsung dari dokumen *Laporan Perancangan UI/UX*.

## Fitur & Keputusan Desain (Sesuai Laporan)
1. **Sistem Spasi (8pt System):** Menggunakan kelipatan 8px untuk padding dan margin (16px base margin container).
2. **Pedoman Visual:** Menggunakan Primary Brand `#1877F2` dan background surface `#F0F2F5`. Tipografi menggunakan font `Inter`.
3. **Ergonomi Hukum Fitts:** Floating Action Button (FAB) berlokasi di pojok kanan bawah. Tombol CTA dibuat *full-width* (minimal 48dp tinggi) untuk menghindari salah ketuk.
4. **Hierarki Datar (Flat Hierarchy):** Transisi antar layar (Home -> Detail/Form) dieksekusi langsung tanpa reload menggunakan Vanilla JS.
5. **Aksesibilitas (WCAG AA):** Area sentuh input dan filter minimal 44x44px. Penggunaan indikator warna *traffic-light* (hijau dan amber) dengan kontras tinggi untuk status ketersediaan slot.

## Cara Menjalankan
Cukup buka file `index.html` menggunakan peramban web (browser). Tampilan akan terpusat secara responsif mengikut skenario *Mobile-First*.
