const SERVER_URL = 'http://localhost:9000';
const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const FAKE_USER = {
  name: 'User',
  email: 'user@example.com',
  password: 'qwerty',
  avatar: '../../public/user.png',
};

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

const convertToEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

export { SERVER_URL, BASE_URL, FAKE_USER, formatDate, convertToEmoji };
