import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [ermsg, setErmsg] = useState(false);

  const searchAPI = async (searchTerm: string) => {
    try {
      setErmsg(false);
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err: any) {
      console.log(err);
      setErmsg(true);
    }
  };

  useEffect(() => {
    searchAPI('pasta');
  }, []);

  return [searchAPI, results, ermsg] as const;
};
