import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

type Recipe = {
    _id?: string;
    recipeName?: string;
    cuisine?: string;
    averageRating?: number;
};

const RecipeList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        console.log("Starting API call..."); // Log before the request
    
        axios.get('http://localhost:3000/recipe') // Use 10.0.2.2 instead of localhost
            .then(response => {
                console.log("API response received:", response.data); // Log the response data
                setRecipes(response.data);
            })
            .catch(error => {
                console.log("Error fetching recipes:", error); // Log any errors
            });
    }, []);
    

    const renderItem = ({ item }: { item: Recipe }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.recipeName || "No Name Available"}</Text>
            <Text>Cuisine: {item.cuisine || "N/A"}</Text>
            <Text>Rating: {item.averageRating ? item.averageRating.toString() : "N/A"}</Text>
        </View>
    );

    return (
        recipes.length > 0 ? (
            <FlatList
                data={recipes}
                keyExtractor={(item, index) => (item._id ? item._id.toString() : index.toString())}
                renderItem={renderItem}
            />
        ) : (
            <View style={styles.loading}>
                <Text>Loading recipes...</Text>
            </View>
        )
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RecipeList;
