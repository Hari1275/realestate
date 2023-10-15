// export const imageUrls = [





// ];

export const imagesA = [

  '/gallery/Amphi-Teatre.png',
  '/gallery/Board-Games.png',
  '/gallery/Business-Centre.png',
  '/gallery/Chit-Chat-Tree.png',
  '/gallery/Cricket-Net.png',
  '/gallery/Estate-Managers-Office.png',
  '/gallery/Table-Tennis.png',
  '/gallery/Toddler-Pool.png',
  '/gallery/Walking-Track.png',
];


export const imagesB = [
  '/gallery/Gazebo.png',
  '/gallery/Guest-Rooms.png',
  '/gallery/Gym (1).png',
  '/gallery/Indoor-Badminton-Court.png',
  '/gallery/Kidz-Play-Zone.png',
  '/gallery/Lotus-Pond.png',

  '/gallery/Yoga-Room.png',
];

export const imagesC = [
  '/gallery/Meditation-Deck.png',
  '/gallery/Multi-Purpose-Hall.png',
  '/gallery/Pool-Deck.png',
  '/gallery/Seating-Arena.png',
  '/gallery/Snooker.png',
  '/gallery/Swimming-Pool.png',
];
export const imagesAObjects = imagesA.map(image => ({
  image,
  alt: image.split('/').pop().replace('.png', '')
}));
export const imagesBObjects = imagesB.map(image => ({
  image,
  alt: image.split('/').pop().replace('.png', '')
}));
export const imagesCObjects = imagesC.map(image => ({
  image,
  alt: image.split('/').pop().replace('.png', '')
}));

export const keyLocations = [
  'Yemalur Bus Station',
  'Indiranagara Metro Station',
  'K.R Puram Railway Station',
  'KLAY Yemalur',
  'Bagmane Tech Park',
];

export const itCompanies = [
  'CGI Information System & Management Consulting Pvt Ltd',
  'Deloitte',
  'Eco Space',
  'Capgemini',
  'Accenture Pvt Ltd',
  'Bagmane Tech Park',
];

export const educationInstitutions = [
  'Need Academy',
  'Indian Public School',
  'Christ Public School',
  'New Horizon College of Engineering',
  'P. Patel Public School',
  'Orchids International School',
];

export const hospitals = [
  'Manipal Hospital',
  'Cloudmine Hospital',
  'OJUS MultiSpeciality Hospital',
  'Sakra World Hospital',
  'Fortis Health World',
];

export const shoppingMallsAndCinemas = [
  'KLM Fashion',
  'Brookefield Mall',
  'Prestige Forum Mall',
  'Gopalan Signature Mall',
  'Phoenix Market City Mall & VR Mall',
];

export const sightsOfInterest = [
  'HAL Heritage center & Aero Space Museum',
  'Vartur Lake',
  'Indira Gandhi Musical Fountain Park',
];