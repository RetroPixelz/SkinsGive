import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import EnterCompetitionScreen from '../Screens/EnterCompetitionScreen'
import { useNavigation } from '@react-navigation/core'
import Ionicons from '@expo/vector-icons/Ionicons';


const CompetitionCards = ( props ) => {

  const {data} = props

  const navigation = useNavigation()

  const addNew = () => {
    navigation.navigate("Enter")
  }
  //make an ifstatement for the timer and then show the winner on time donw

// const [Score, setScore] = useState("")

//   const upscore = () => {
//     currentScore = data.score += 1;
//     // currentScore += 1
//     // data.score.save()
//     setScore(currentScore)
//     console.log(currentScore)

//   }

//   const downScore = () => {
//     currentScore = data.score -= 1;
//     // currentScore -- 1

//     // data.score.save()
//     setScore(currentScore)
//     console.log(currentScore)
//   }


  return (
    <View style={styles.card}>
        <View style={styles.timer}>
            <Text style={styles.time}> 00:00:00 </Text>
        </View>
        <View style={styles.skinSection}>
            <Image style={styles.skin} source={require("../assets/Howl.png")}/>
            <Text style={styles.skinName}> {data.name}</Text>
        </View>
        <View style={styles.enties}>

            {/* <TouchableOpacity onPress={upscore}>
                <Ionicons name="arrow-up-circle-outline" size={35} color="green" />
            </TouchableOpacity>

            <TouchableOpacity onPress={downScore}>
                <Ionicons name="arrow-down-circle-outline" size={35} color="red" />
            </TouchableOpacity> */}

            <Text style={styles.scoreText}>Score: {data.score}</Text>

            {/* <Text style={styles.entriesText}> Entries: {data.Entries}</Text> */}

            {/* <TouchableOpacity style={styles.btn} activeOpacity={0.75}  onPress={addNew}  >
                <Text style={styles.enterText}> Enter Competition</Text>
            </TouchableOpacity> */}

        </View>
    </View>
  )
}

export default CompetitionCards

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 250,
        backgroundColor: '#2E3034',
        marginTop: 25,
        borderRadius: 25
    },
    timer: {
        width: 100,
        height: 30,
        backgroundColor: '#A12895',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 20,
        padding: 6
    },
    time: {
        textAlign: 'center',
        color: 'white'
        
    },
    skinSection: {
        width: 300,
        height: 125,
        backgroundColor: '#393B3F',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 20,
        border: 5
    },
    skin: {
        height: 65,
        width: 300,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
        resizeMode: 'cover'
    },
    skinName: {
        textAlign: 'center',
        color: 'white',
        // textDecorationLine: 'underline'
    },
    enties: {
        width: 300,
        height: 50,
        flexDirection: "row",
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 10
    },
    entriesText: {
        fontSize: 12,
        marginTop: 15,
        color: 'white',
        alignSelf: 'flex-start'
    },
    btn: {
        width:150,
        height: 40,
        marginTop: 5,
        marginRight: 5,
        borderRadius: 25,
        backgroundColor: '#00A2E2',
        position: 'absolute',
        right: 0
    },
    enterText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10
    },
    scoreText: {
        color: "white",
        marginTop: 15,
        position: "absolute",
        right: 20
    }
})