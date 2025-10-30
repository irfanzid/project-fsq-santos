document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Anda dapat menambahkan JavaScript lain di sini,
// seperti efek ketika elemen muncul (Intersection Observer),
// atau membuat navbar berubah warna ketika digulir.
