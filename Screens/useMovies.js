import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useMovies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        // Check if data exists in AsyncStorage
        const storedData = await AsyncStorage.getItem('data');
        if (storedData) {
          setData(JSON.parse(storedData)); 
          setLoading(false);
          return;
        }

        // Fetch fresh data from API
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=b75811e8352dc9e8b287918a481fbf45'
        );
        const result = await response.json();

        setData(result.results); 
        await AsyncStorage.setItem('data', JSON.stringify(result.results)); 
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { data, loading, error };
};

export default useMovies;

