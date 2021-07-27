import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/veste.jpg")}
      ></Image>
      <View>
        <Text style={styles.title}>Red jacket to sell</Text>
        <Text style={styles.price}>500$</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/tete.jpg")}
            title="Ben dmh"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
