import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class StepsScreen extends React.Component {
  
  render() {
  	return(
  		<View>
  			<Image
          style={styles.mapImage}
          source={require('../../../assets/images/map.jpg')}
        />
  		</View>
  	)
  }
}
