const imagePath = (path) => `${import.meta.env.BASE_URL}assets/images/monuments/${path}`;

export const monuments = [
  {
    id: 1,
    slug: "guillemins",
    name: "Gare de Liège-Guillemins",
    category: "Architecture moderne",
    image: imagePath("guillemins.jpg"),

    shortDescription:
      "Gare moderne conçue par Santiago Calatrava, symbole architectural de Liège.",

    description:
      "Inaugurée en 2009, la Gare de Liège-Guillemins est l'un des bâtiments contemporains les plus emblématiques de Belgique. Sa structure spectaculaire en acier, verre et béton attire chaque année des milliers de visiteurs.",

    address: "Place des Guillemins 2, 4000 Liège",

    latitude: 50.62484,
    longitude: 5.56685,

    googleMapsUrl:
      "https://www.google.com/maps?q=50.62484,5.56685",
  },

  {
    id: 2,
    slug: "bueren",
    name: "Montagne de Bueren",
    category: "Historique",
    image: imagePath("bueren.jpg"),

    shortDescription:
      "Escalier historique de 374 marches offrant une vue panoramique sur Liège.",

    description:
      "La Montagne de Bueren relie le centre historique aux hauteurs de la ville. Cet impressionnant escalier est devenu l'un des lieux touristiques les plus photographiés de Liège.",

    address: "Montagne de Bueren, 4000 Liège",

    latitude: 50.64911,
    longitude: 5.57744,

    googleMapsUrl:
      "https://www.google.com/maps?q=50.64911,5.57744",
  },

  {
    id: 3,
    slug: "perron",
    name: "Le Perron",
    category: "Historique",
    image: imagePath("perron.jpg"),

    shortDescription:
      "Symbole historique représentant les libertés communales de Liège.",

    description:
      "Situé sur la Place du Marché, le Perron est l'un des symboles les plus importants de la ville. Il représente depuis des siècles les libertés accordées aux Liégeois.",

    address: "Place du Marché, 4000 Liège",

    latitude: 50.64563,
    longitude: 5.57364,

    googleMapsUrl:
      "https://www.google.com/maps?q=50.64563,5.57364",
  },

  {
    id: 4,
    slug: "palais-princes-eveques",
    name: "Palais des Princes-Évêques",
    category: "Historique",
    image: imagePath("palais-princes-eveques.jpg"),

    shortDescription:
      "Ancienne résidence des princes-évêques de Liège.",

    description:
      "Construit au coeur de la ville, le Palais des Princes-Évêques est un chef-d'oeuvre architectural mêlant influences gothiques et Renaissance. Il abrite aujourd'hui le Palais de Justice.",

    address: "Place Saint-Lambert 18, 4000 Liège",

    latitude: 50.64514,
    longitude: 5.57316,

    googleMapsUrl:
      "https://www.google.com/maps?q=50.64514,5.57316",
  },

  {
    id: 5,
    slug: "cathedrale-saint-paul",
    name: "Cathédrale Saint-Paul",
    category: "Religieux",
    image: imagePath("cathedrale-saint-paul.jpg"),

    shortDescription:
      "Cathédrale gothique majeure du patrimoine religieux liégeois.",

    description:
      "Construite entre le XIIIe et le XVe siècle, la Cathédrale Saint-Paul est célèbre pour ses vitraux, son trésor religieux et son architecture gothique remarquable.",

    address: "Place Cathédrale, 4000 Liège",

    latitude: 50.63992,
    longitude: 5.57058,

    googleMapsUrl:
      "https://www.google.com/maps?q=50.63992,5.57058",
  },

  {
    id: 6,
    slug: "opera-royal",
    name: "Opéra Royal de Wallonie",
    category: "Culturel",
    image: imagePath("opera-royal.jpg"),

    shortDescription:
      "Institution culturelle emblématique de la Wallonie.",

    description:
      "Fondé en 1820, l'Opéra Royal de Wallonie accueille chaque année des productions lyriques, concerts et spectacles reconnus à l'international.",

    address: "Place de l'Opéra, 4000 Liège",

    latitude: 50.64168,
    longitude: 5.57181,

    googleMapsUrl:
      "https://www.google.com/maps?q=50.64168,5.57181",
  },
];
