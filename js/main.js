import { dataWisata } from "./dataWisata.js";

const container = document.getElementById("card-container");
const tags = document.querySelectorAll(".tag");

function render(data) {
  container.innerHTML = data
    .map(
      (item) => `
            <div class="card card-default">
                <div class="card-body flex box-shadow-xlarge flex-row gap-medium">
                    <div class="width-1/2">
                        <img class="height-large width-1/1" src="${item.gambar}" alt="${item.judul}">
                    </div>
                    <div class="width-1/2">
                        <h2>${item.judul}</h2>
                        <div class="flex flex-row flex-align-items-center gap-small">
                            <b><p class="text-medium margin-remove-bottom color-error">${item.rating}</p></b>
                            <i class="fa-solid fa-star fa-lg" style="color: rgb(255, 0, 0);"></i>
                            <p class="text-small margin-remove-bottom color-error">${item.ulasan}</p>
                        </div>
                        <p>
                            ${item.deskripsi}
                        </p>
                        <p class="text-large margin-remove-bottom">Mulai dari</p>
                        <b><p class="text-large margin-remove-bottom color-error">${item.harga}</p></b>
                        <p>
                            <br><br>
                            ${item.lokasi}
                        </p>
                        <button class="button button-primary">Lihat Semua</button>
                    </div>
                </div>
            </div>
        `,
    )
    .join("");
}

// render awal (default)
render(dataWisata.filter((item) => item.kategori === "gunung"));

// event klik tag
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    // hapus active semua
    tags.forEach((t) => t.classList.remove("active"));

    // set active yang diklik
    tag.classList.add("active");

    const kategori = tag.dataset.kategori;

    // filter data
    const filtered = dataWisata.filter((item) => item.kategori === kategori);

    // render ulang
    render(filtered);
  });
});
