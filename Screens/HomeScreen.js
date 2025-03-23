// HomeScreen.js (Updated with Pagination)
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import useMovies from './useMovies';

const HomeScreen = () => {
  const { data, loading, error, loadMoreMovies } = useMovies();

  if (loading && data.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading movies</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.headingtext}>Popular Movies</Text>
      </View>

      <View style={styles.container2}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          onEndReached={loadMoreMovies}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="small" color="blue" /> : null}
          renderItem={({ item }) => (
            <View style={styles.movieContainer}>
              <Image
                source={{ uri: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://via.placeholder.com/150' }}
                style={styles.movieImage}
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  container1: {
    flex: 0.1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    color: 'white',
    fontSize: 29,
    fontWeight: 'bold',
  },
  container2: {
    flex: 0.9,
    backgroundColor: 'white',
    padding: 10,
  },
  movieContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 15,
  },
  movieImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
