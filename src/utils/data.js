// Import images home card
import imgCard1 from "../assets/images/img-card1.png";
import imgCard2 from "../assets/images/img-card2.png";
import imgCard3 from "../assets/images/img-card3.png";
import imgCard4 from "../assets/images/img-card4.png";
import imgCard5 from "../assets/images/img-card5.png";

// Import spesification images
import dimensionsIcon from "../assets/icons/dimensions.svg";
import buildAreaIcon from "../assets/icons/building-area.svg";
import stairsIcon from "../assets/icons/stairs.svg";
import bedroomIcon from "../assets/icons/bedroom.svg";

// Import image and icons data testimonial
import profileIsEmpty from "../assets/images/account-cirlce.svg";

// Import images home card
import anotherCard1 from "../assets/images/another-desain1.png";
import anotherCard2 from "../assets/images/another-desain2.png";
import anotherCard3 from "../assets/images/another-desain3.png";
import anotherCard4 from "../assets/images/another-desain4.png";

export const navbarList = [
  {
    id: 0,
    name: "Tentang Kami",
    showDropdown: true,
  },
  {
    id: 1,
    name: "Produk & Layanan",
    showDropdown: true,
  },
  {
    id: 3,
    name: "Blog",
    showDropdown: false,
  },
  {
    id: 4,
    name: "FAQ",
    showDropdown: false,
  },
];

export const dataHomeView = [
  {
    id: 0,
    img_url: imgCard1,
    title: "Ruang Keluarga",
    size: "2.0 x 2.9",
  },
  {
    id: 1,
    img_url: imgCard2,
    title: "Kamar tidur",
    size: "4.0 x 3.4",
  },
  {
    id: 2,
    img_url: imgCard3,
    title: "Ruang Makan & Dapur",
    size: "3.0 x 2.9",
  },
  {
    id: 3,
    img_url: imgCard4,
    title: "Ruang Kerja",
    size: "2.0 x 2.9",
  },
  {
    id: 4,
    img_url: imgCard5,
    title: "Kamar tidur",
    size: "4.0 x 3.4",
  },
];

export const dataSpesification = [
  {
    id: 0,
    icon_url: dimensionsIcon,
    title: "Dimensi Tanah",
    desc: "15 x 8m",
  },
  {
    id: 1,
    icon_url: buildAreaIcon,
    title: "Luas Bangunan",
    desc: "112m2",
  },
  {
    id: 2,
    icon_url: stairsIcon,
    title: "Lantai",
    desc: 2,
  },
  {
    id: 3,
    icon_url: bedroomIcon,
    title: "Kamar Tidur",
    desc: 4,
  },
];

export const dataTestimonial = [
  {
    id: 0,
    image_url: profileIsEmpty,
    name: "Budi Setiadi",
    review: 4.5,
    desc: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
  },
  {
    id: 1,
    image_url: profileIsEmpty,
    name: "Budi Setiadi",
    review: 4.5,
    desc: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
  },
  {
    id: 2,
    image_url: profileIsEmpty,
    name: "Budi Setiadi",
    review: 4.5,
    desc: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
  },
];

export const dataAnotherStudioCard = [
  {
    id: 0,
    img_url: anotherCard1,
    title: "Omah Apik 1",
    name: "Scandinavian",
  },
  {
    id: 1,
    img_url: anotherCard2,
    title: "Omah Apik 2",
    name: "Scandinavian",
  },
  {
    id: 2,
    img_url: anotherCard3,
    title: "Omah Apik 3",
    name: "Scandinavian",
  },
  {
    id: 3,
    img_url: anotherCard4,
    title: "Omah Apik 4",
    name: "Scandinavian",
  },
];
