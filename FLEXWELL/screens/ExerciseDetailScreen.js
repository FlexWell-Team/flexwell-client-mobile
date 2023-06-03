import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Fumi } from "react-native-textinput-effects";
import { useNavigation } from "@react-navigation/native";
import {
  buttonTextSize,
  primaryColor,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
const ExerciseDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  // Data untuk flatlist
  const data = [
    { id: "1", name: "John Doe", avatar: "https://picsum.photos/id/1/info" },
    { id: "2", name: "Jane Smith", avatar: "https://picsum.photos/id/2/info" },
    {
      id: "3",
      name: "Mike Johnson",
      avatar: "https://picsum.photos/id/3/info",
    },
  ];

  const toOneExercise = (id) => {
    console.log(id);
    navigation.navigate("DayExercise");
  };

  // Styles
  const styles = {
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      flex: 1,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      marginRight: 16,
    },
    name: {
      flex: 1,
      fontSize: 16,
    },
    button: {
      padding: 8,
    },
    icon: {
      width: 24,
      height: 24,
    },
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        // backgroundColor: "blue",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          marginTop: 32,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          //   backgroundColor: "red",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Form {id}</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderWidth: 2,
            margin: 10,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text>Image</Text>
          </View>
          <View
            style={{
              flex: 2,
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <Text>Lateral Raises</Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text>Shoulder</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExerciseDetailScreen;