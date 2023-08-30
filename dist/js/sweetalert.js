const btnNetflix = document.getElementById("btn-netflix");
const btnYt = document.getElementById("btn-youtube");
const btnSpotify = document.getElementById("btn-spotify");
const btnVidio = document.getElementById("btn-vidio");
const btnApple = document.getElementById("btn-apple-music");
const btnCanva = document.getElementById("btn-canva");
const btnViu = document.getElementById("btn-viu");
const btnDriveAll = document.querySelectorAll("#btn-google-drive");

btnNetflix.addEventListener("click", () => {
  swal({
    closeOnClickOutside: false,
    title: "Netflix Premium 1 Bulan",
    text: "Anda akan membeli Netflix Premium 1 bulan Rp 30.000",
    icon: "info",
    buttons: {
      cancel: "Batal",

      Beli: {
        text: "Beli",
        value: "Beli",
        visible: true,
        className: "",
        closeModal: true,
      },
    },
  }).then((value) => {
    switch (value) {
      case "Beli":
        swal({
          title: "Terimakasih!",
          text: "Anda akan redirect ke halaman Whatsapp...",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Netflix%20Shared%201%20Bulan%20dengan%20harga%20Rp%2030.000.%20apakah%20masih%20tersedia?"
          );
        });
        break;

      default:
        swal("Transaksi di batalkan", "", "error");
    }
  });
});

btnYt.addEventListener("click", () => {
  swal({
    closeOnClickOutside: false,
    title: "Youtube Premium 4 Bulan",
    text: "Anda akan membeli Youtube 4 bulan Rp 10.000",
    icon: "info",
    buttons: {
      cancel: "Batal",

      Beli: {
        text: "Beli",
        value: "Beli",
        visible: true,
        className: "",
        closeModal: true,
      },
    },
  }).then((value) => {
    switch (value) {
      case "Beli":
        swal({
          title: "Terimakasih!",
          text: "Anda akan redirect ke halaman Whatsapp...",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Youtube%20Premium%204%20Bulan%20dengan%20harga%20Rp%2010.000.%20apakah%20masih%20tersedia?"
          );
        });
        break;

      default:
        swal("Transaksi di batalkan", "", "error");
    }
  });
});

btnSpotify.addEventListener("click", () => {
  swal({
    closeOnClickOutside: false,
    title: "Spotify Premium 1 Bulan",
    text: "Anda akan membeli Spotify 1 bulan Rp 5.000",
    icon: "info",
    buttons: {
      cancel: "Batal",

      Beli: {
        text: "Beli",
        value: "Beli",
        visible: true,
        className: "",
        closeModal: true,
      },
    },
  }).then((value) => {
    switch (value) {
      case "Beli":
        swal({
          title: "Terimakasih!",
          text: "Anda akan redirect ke halaman Whatsapp...",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Spotify%20Premium%201%20Bulan%20dengan%20harga%20Rp%205.000.%20apakah%20masih%20tersedia?"
          );
        });
        break;

      default:
        swal("Transaksi di batalkan", "", "error");
    }
  });
});

btnVidio.addEventListener("click", () => {
  swal({
    closeOnClickOutside: false,
    title: "Vidio Platinum 6 Bulan",
    text: "Anda akan membeli Vidio 6 bulan Rp 20.000",
    icon: "info",
    buttons: {
      cancel: "Batal",

      Beli: {
        text: "Beli",
        value: "Beli",
        visible: true,
        className: "",
        closeModal: true,
      },
    },
  }).then((value) => {
    switch (value) {
      case "Beli":
        swal({
          title: "Terimakasih!",
          text: "Anda akan redirect ke halaman Whatsapp...",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Vidio%20Platinum%206%20Bulan%20dengan%20harga%20Rp%2020.000.%20apakah%20masih%20tersedia?"
          );
        });
        break;

      default:
        swal("Transaksi di batalkan", "", "error");
    }
  });
});

btnApple.addEventListener("click", () => {
  swal({
    closeOnClickOutside: false,
    title: "Apple Musik 1 Bulan",
    text: "Anda akan membeli ITunes 1 bulan Rp 5.000",
    icon: "info",
    buttons: {
      cancel: "Batal",

      Beli: {
        text: "Beli",
        value: "Beli",
        visible: true,
        className: "",
        closeModal: true,
      },
    },
  }).then((value) => {
    switch (value) {
      case "Beli":
        swal({
          title: "Terimakasih!",
          text: "Anda akan redirect ke halaman Whatsapp...",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Apple%20Musik%201%20Bulan%20dengan%20harga%20Rp%205.000.%20apakah%20masih%20tersedia?"
          );
        });
        break;

      default:
        swal("Transaksi di batalkan", "", "error");
    }
  });
});

btnCanva.addEventListener("click", () => {
  swal({
    closeOnClickOutside: false,
    title: "Canva Pro 1 Tahun",
    text: "Anda akan membeli Canva Pro 1 Tahun Rp 10.000",
    icon: "info",
    buttons: {
      cancel: "Batal",

      Beli: {
        text: "Beli",
        value: "Beli",
        visible: true,
        className: "",
        closeModal: true,
      },
    },
  }).then((value) => {
    switch (value) {
      case "Beli":
        swal({
          title: "Terimakasih!",
          text: "Anda akan redirect ke halaman Whatsapp...",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Canva%20Pro%201%20Tahun%20dengan%20harga%20Rp%2010.000.%20apakah%20masih%20tersedia?"
          );
        });
        break;

      default:
        swal("Transaksi di batalkan", "", "error");
    }
  });
});

btnViu.addEventListener("click", () => {
  swal({
    closeOnClickOutside: false,
    title: "Viu Premium 6 Bulan",
    text: "Anda akan membeli Viu 6 bulan Rp 10.000",
    icon: "info",
    buttons: {
      cancel: "Batal",

      Beli: {
        text: "Beli",
        value: "Beli",
        visible: true,
        className: "",
        closeModal: true,
      },
    },
  }).then((value) => {
    switch (value) {
      case "Beli":
        swal({
          title: "Terimakasih!",
          text: "Anda akan redirect ke halaman Whatsapp...",
          icon: "success",
          closeOnClickOutside: false,
        }).then(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Viu%20Premium%206%20Bulan%20dengan%20harga%20Rp%2010.000.%20apakah%20masih%20tersedia?"
          );
        });
        break;

      default:
        swal("Transaksi di batalkan", "", "error");
    }
  });
});

btnDriveAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    swal({
      closeOnClickOutside: false,
      title: "Google Drive 1 Tahun",
      text: "Anda akan membeli Google Drive 1 Tahun",
      icon: "info",
      buttons: {
        cancel: "Batal",

        Beli: {
          text: "Beli",
          value: "Beli",
          visible: true,
          className: "",
          closeModal: true,
        },
      },
    }).then((value) => {
      switch (value) {
        case "Beli":
          swal({
            title: "Terimakasih!",
            text: "Anda akan redirect ke halaman Whatsapp...",
            icon: "success",
            closeOnClickOutside: false,
          }).then(() => {
            window.open(
              "https://api.whatsapp.com/send?phone=6289614925681&text=Halo%20kak!%20Saya%20ingin%20membeli%20Google%20Drive%20Storage%20Apakah%20masih%20tersedia?"
            );
          });
          break;

        default:
          swal("Transaksi di batalkan", "", "error");
      }
    });
  });
});
