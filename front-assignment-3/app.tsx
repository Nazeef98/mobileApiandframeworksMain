import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RecipeList from './src/components/RecipeList';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
                        <RecipeList /> {/* Render the RecipeList component */}
          
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
