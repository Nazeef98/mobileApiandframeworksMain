import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';


//schema for the display items
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
    
        //use local host so that it get details from the localhost server
        axios.get('http://localhost:3000/recipe') // Use 10.0.2.2 instead of localhost
            .then(response => {
                console.log("API response received:", response.data); // Log the response data
                setRecipes(response.data);
            })
            .catch(error => {
                console.log("Error fetching recipes:", error); // Log any errors
            });
    }, []);
    
//code is for the table view list item to show the details 
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
            //this appears when the backend server is not running
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
