const fs = require("fs");

const dataWisata = [
  {
    id: 1,
    slug: "bukit-rhema-gereja-ayam",
    judul: "Bukit Rhema Gereja Ayam",
  },
  {
    id: 2,
    slug: "nepal-van-java",
    judul: "Nepal Van Java",
  },
  {
    id: 3,
    slug: "gunung-telomoyo-via-dalangan",
    judul: "Gunung Telomoyo Via Dalangan",
  },
  {
    id: 4,
    slug: "taman-nasional-gunung-merbabu",
    judul: "Taman Nasional Gunung Merbabu",
  },
  {
    id: 5,
    slug: "puncak-gunung-andong",
    judul: "Puncak Gunung Andong",
  },
  {
    id: 6,
    slug: "bukit-dagi",
    judul: "Bukit Dagi",
  },
  {
    id: 7,
    slug: "punthuk-mongkrong",
    judul: "Punthuk Mongkrong",
  },
  {
    id: 8,
    slug: "bukit-grenden",
    judul: "Bukit Grenden",
  },
  {
    id: 9,
    slug: "wisata-alam-bukit-trianggulasi",
    judul: "Wisata Alam Bukit Trianggulasi",
  },
  {
    id: 10,
    slug: "gunung-tidar",
    judul: "Gunung Tidar",
  },
  {
    id: 11,
    slug: "sukmojoyo-hill",
    judul: "Sukmojoyo Hill",
  },
  {
    id: 12,
    slug: "air-terjun-kedung-kayang",
    judul: "Air Terjun Kedung Kayang",
  },
  {
    id: 13,
    slug: "air-terjun-sekar-langit",
    judul: "Air Terjun Sekar Langit",
  },
  {
    id: 14,
    slug: "air-terjun-sumuran-seloprojo",
    judul: "Air Terjun Sumuran Seloprojo",
  },
  {
    id: 15,
    slug: "sendang-maren",
    judul: "Sendang Maren",
  },
  {
    id: 16,
    slug: "curug-silawe",
    judul: "Curug Silawe",
  },
  {
    id: 17,
    slug: "air-terjun-grenjengan-kembar",
    judul: "Air Terjun Grenjengan Kembar",
  },
  {
    id: 18,
    slug: "kali-udal-gumuk",
    judul: "Kali Udal Gumuk",
  },
  {
    id: 19,
    slug: "tuk-udal-grabag",
    judul: "Tuk Udal Grabag",
  },
  {
    id: 20,
    slug: "curug-watu-ploso",
    judul: "Curug Watu Ploso",
  },
  {
    id: 21,
    slug: "curug-lawe-pringapus",
    judul: "Curug Lawe Pringapus",
  },
  {
    id: 22,
    slug: "silancur-highland",
    judul: "Silancur Highland",
  },
  {
    id: 23,
    slug: "mangli-sky-view",
    judul: "Mangli Sky View",
  },
  {
    id: 24,
    slug: "top-selfie-pinusan-kragilan",
    judul: "Top Selfie Pinusan Kragilan",
  },
  {
    id: 25,
    slug: "pinea-forest-mangli",
    judul: "Pinea Forest Mangli",
  },
  {
    id: 26,
    slug: "lembah-pinus",
    judul: "Lembah Pinus",
  },
  {
    id: 27,
    slug: "kali-bontar-camp-ground",
    judul: "Kali Bontar Camp Ground",
  },
  {
    id: 28,
    slug: "watu-nganten",
    judul: "Watu Nganten",
  },
  {
    id: 29,
    slug: "jurang-jero-outbound",
    judul: "Jurang Jero Outbound",
  },
  {
    id: 30,
    slug: "ketep-pass-magelang",
    judul: "Ketep Pass Magelang",
  },
  {
    id: 31,
    slug: "punthuk-setumbu",
    judul: "Punthuk Setumbu",
  },
  {
    id: 32,
    slug: "embung-kledug",
    judul: "Embung Kledug",
  },
  {
    id: 33,
    slug: "bukit-barede",
    judul: "Bukit Barede",
  },
  {
    id: 34,
    slug: "punthuk-kendhil-kamal",
    judul: "Punthuk Kendhil Kamal",
  },
  {
    id: 35,
    slug: "sunrise-point-telomoyo",
    judul: "Sunrise Point Telomoyo",
  },
  {
    id: 36,
    slug: "sunrise-kendeng-hill",
    judul: "Sunrise Kendeng Hill",
  },
  {
    id: 37,
    slug: "progo-rafting-magelang",
    judul: "Progo Rafting Magelang",
  },
  {
    id: 38,
    slug: "rafting-sungai-elo",
    judul: "Rafting Sungai Elo",
  },
  {
    id: 39,
    slug: "homosapienspark-magelang",
    judul: "Homosapienspark Magelang",
  },
  {
    id: 40,
    slug: "jeep-parang-menoreh",
    judul: "Jeep Parang Menoreh",
  },
  {
    id: 41,
    slug: "vw-tour-borobudur",
    judul: "VW Tour Borobudur",
  },
  {
    id: 42,
    slug: "wisata-getek-balong",
    judul: "Wisata Getek Balong",
  },
  {
    id: 43,
    slug: "propang-ranch",
    judul: "Propang Ranch",
  },
  {
    id: 44,
    slug: "dam-bencho-pendem",
    judul: "DAM Becho Pendem",
    
  }
];


const staticPages = [
  "",
  "/galeri",
  "/eksplor",
  "/hiddengem",
  "/about"
];

let urls = "";

staticPages.forEach((page) => {
  urls += `
  <url>
    <loc>https://www.wisatamagelang.web.id${page}</loc>
  </url>`;
});

dataWisata.forEach((item) => {
  urls += `
  <url>
    <loc>
      https://www.wisatamagelang.web.id/detail/${item.slug}
    </loc>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);

console.log("Sitemap generated!");