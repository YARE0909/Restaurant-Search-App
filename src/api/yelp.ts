import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer 9PCkaxBJtvKoGJQxAmbodnScFFBieQMAchxRt51KMdGH6IYbB0O75HlS3c8djOXETjpnJ2ThysKQ2kzI8vHfcVXLw3cuvSWZfMqqklzMOHFNMgJPkrMoNq4VhjsbZHYx`,
  },
});
