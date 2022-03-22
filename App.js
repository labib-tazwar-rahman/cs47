import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  const haroldProfile = Profiles.harold;
  const [profileImage] = useState(haroldProfile.image);
  const [name] = useState(haroldProfile.name);
  const [age] = useState(haroldProfile.age);
  const [occupation] = useState(haroldProfile.occupation);

  return (
    <View style={styles.container}>
      <View style={styles.topPanel}/>
        <View style={styles.logoBar}>
          <Ionicons
           name="md-settings"
           color="lightgrey" 
           size={34} 
           />
          <Image
            style={styles.titleImage}
            resizeMode={'contain'} 
            source={Images.logo} 
            />
          <Image 
            style={styles.topIcon}
            source={Images.chat} 
            />
        </View>

        <View style={styles.body}>
          <View style={styles.display}>
            <Image
             style={styles.pic}
             source={profileImage} 
             />
      
            <Text style={styles.topProfileText}>
              {name}, {age}
            </Text>
            
            <Text style={styles.bottomProfileText}>
            {occupation}
            </Text>

          </View>
        </View>
        <View style={styles.bottomPanel}>

          <View style={styles.smallButtonCircle}>
            <Image source={Images.rewind} 
            resizeMode={'contain'} 
            style={styles.smallButton}/>
          </View>

          <View style={styles.bigButtonCircle}>
            <Image source={Images.nope} 
            resizeMode={'contain'} 
            style={styles.smallButton}/>
          </View>

          <View style={styles.smallButtonCircle}>
            <Image source={Images.boost} 
            resizeMode={'contain'} 
            style={styles.smallButton}/>
          </View>

          <View style={styles.bigButtonCircle}>
            <Image source={Images.like} 
            resizeMode={'contain'} 
            style={styles.bigButton}/>
          </View>

          <View style={styles.smallButtonCircle}>
            <Image source={Images.superLike} 
            resizeMode={'contain'} 
            style={styles.smallButton}/>
          </View>

        </View>
    </View>     
  );
}
const {height} = Dimensions.get('window');
var cardWidth = height * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  blob: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  topPanel: {
    height: 20,
    width: '100%',
  },
  logoBar: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },

  titleImage: {
    height: 30,
    width: '65%',
  },
  topIcon: {
    height: 40,
    width: 40,
    tintColor: "lightgrey"
  },

  display: {
    width: cardWidth,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'darkgrey',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  pic: {
    width: '100%',
    height: cardWidth,
  },

  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  topProfileText: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 18,
    fontSize: 30,
    fontWeight: 'bold',
  },

  bottomProfileText: {
    color: '#A7A6A6',
    marginLeft: 18,
    marginBottom: 16,
    fontSize: 18,
  },

  bottomPanel: {
    height: 90,
    width: '78%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  smallButtonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    backgroundColor: 'white',
    borderRadius: 22
  },

  bigButtonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    backgroundColor: 'white',
    borderRadius: 28
  },

  smallButton: {
    height: 22,
    width: 22,
  },

  bigButton: {
    height: 28,
    width: 28,
  }
});
