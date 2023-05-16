"use strict";
let namaSaya = "Galih Roswandi";
let username = 123;
let isDead = false;
//!Multiple type data
let pacarSaya;
pacarSaya = "Satu bro";
//!Array biasa
let pacarAnda;
pacarAnda = ["adinda azani", "oasdffd"];
//!Tuple array
let setlingkuhanSaya;
setlingkuhanSaya = ["duka tah", 20, true];
let temanKita;
temanKita = {
    nama: "Otong",
    isKampret: true,
};
//!Function
function create() {
    // kembalian bernilai number
    return 119234;
}
const create2 = () => {
    // void tidak mengembalikan apa apa
    console.log("Funnction tidak mengembalikan apa apa");
};
const add = (x, y) => {
    return `${x} ditambah ${y} hasilnya: ${x + y}`;
};
let sayaManusia;
sayaManusia = "Galih Roswandi";
function createProcessorIntel(processor) {
    console.log(`
    --- 
    Terima kasih ${processor.brand} ✨
    ___ 
    Anda telah berhasil membuat processor dengan detail sebagai berikut: ✨

    nama base model: ${processor.baseModel} ✨
    nama model: ${processor.modelName} ✨
    total core: ${processor.totalCore} ✨
    kecepatan clock: ${processor.clockSpeed} ✨
    turbo boost enable? ${processor.turboBoost} ✨
    `);
}
function createProcessorAMD(processor) {
    console.log(`
    --- 
    Terima kasih ${processor.brand} ✨
    ___ 
    Anda telah berhasil membuat processor dengan detail sebagai berikut: ✨

    nama base model: ${processor.baseModel} ✨
    nama model: ${processor.modelName} ✨
    total core: ${processor.totalCore} ✨
    kecepatan clock: ${processor.clockSpeed} ✨
    precission boost enable? ${processor.precissionBoost
        ? processor.precissionBoost
        : "not ready, to overclock !"} ✨
    `);
}
const coreI5 = {
    brand: "Intel",
    baseModel: "Core I5",
    modelName: "i5-13100F",
    clockSpeed: 10,
    totalCore: 4,
    turboBoost: true,
};
const ryzen1 = {
    brand: "AMD",
    baseModel: "Ryzen 1",
    modelName: "Ryzen 1 5900X",
    clockSpeed: 2,
    totalCore: 2,
};
const ryzen9 = {
    brand: "AMD",
    baseModel: "Ryzen 9",
    modelName: "Ryzen 9 5900X",
    clockSpeed: 20,
    totalCore: "SuperCore",
    precissionBoost: "ready to overclock",
};
createProcessorIntel(coreI5);
createProcessorAMD(ryzen1);
createProcessorAMD(ryzen9);
