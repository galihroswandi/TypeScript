let namaSaya: string = "Galih Roswandi";
let username: number = 123;
let isDead: boolean = false;

//!Multiple type data
let pacarSaya: number | string;
pacarSaya = "Satu bro";

//!Array biasa
let pacarAnda: string[];
pacarAnda = ["adinda azani", "oasdffd"];

//!Tuple array
let setlingkuhanSaya: [string, number, boolean];
setlingkuhanSaya = ["duka tah", 20, true];

//!Custom type
type TemanType = {
  nama: string;
  isKampret: boolean;
  hutang?: number; // berikan tanda ? untuk opsional
};
let temanKita: TemanType;
temanKita = {
  nama: "Otong",
  isKampret: true,
};

//!Function
function create(): number {
  // kembalian bernilai number
  return 119234;
}

const create2 = (): void => {
  // void tidak mengembalikan apa apa
  console.log("Funnction tidak mengembalikan apa apa");
};

const add = (x: number, y: number): string => {
  return `${x} ditambah ${y} hasilnya: ${x + y}`;
};

//!
type Wanita = string;
type Pria = boolean;

type Gender = Pria | Wanita;

let sayaManusia: Gender;
sayaManusia = "Galih Roswandi";

//!Studi Kasus
// Interface / Gambaran
type CoreCount = 2 | 4 | 8 | 12 | 16 | 24;
type CoreName = "DualCore" | "QuadCore" | "SuperCore";
type Core = CoreCount | CoreName;

interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  totalCore: Core;
  clockSpeed: number;
}

interface Intel extends IProcessor {
  turboBoost: boolean;
}

interface AMD extends IProcessor {
  precissionBoost?: string;
}

function createProcessorIntel(processor: Intel): void {
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

function createProcessorAMD(processor: AMD): void {
  console.log(`
    --- 
    Terima kasih ${processor.brand} ✨
    ___ 
    Anda telah berhasil membuat processor dengan detail sebagai berikut: ✨

    nama base model: ${processor.baseModel} ✨
    nama model: ${processor.modelName} ✨
    total core: ${processor.totalCore} ✨
    kecepatan clock: ${processor.clockSpeed} ✨
    precission boost enable? ${
      processor.precissionBoost
        ? processor.precissionBoost
        : "not ready, to overclock !"
    } ✨
    `);
}

const coreI5: Intel = {
  brand: "Intel",
  baseModel: "Core I5",
  modelName: "i5-13100F",
  clockSpeed: 10,
  totalCore: 4,
  turboBoost: true,
};

const ryzen1: AMD = {
  brand: "AMD",
  baseModel: "Ryzen 1",
  modelName: "Ryzen 1 5900X",
  clockSpeed: 2,
  totalCore: 2,
};

const ryzen9: AMD = {
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
