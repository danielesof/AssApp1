import React from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import ProgressBar from 'react-native-progress/Bar';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
     headerStyle: {
        backgroundColor: '#ECECEC',
        elevation: 0,
        height: 5,
        shadowColor: 'transparent',
        borderBottomWidth: 0
      },
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      stepsDone: 7000,
      stepsGoal: 10000,
      macroNutrients: {
        proteinDone: 100,
        proteinGoal: 160,
        carbDone: 60,
        carbGoal: 200,
        fatDone: 20,
        fatGoal: 75
      }
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      userPhoto: this.props.userPhoto
    });
  }
  onPressNutrition = () => {
    this.props.navigation.navigate('Nutrition', {
      macroNutrients: this.state.macroNutrients
    });
  };

  onPressSteps = () => {
    let stepsDone = this.state.stepsDone;
    let stepsGoal = this.state.stepsGoal;
    this.props.navigation.navigate('Steps', { stepsDone, stepsGoal });
  };

  onPressDetailsText = () => {};

  getCaloriesDone = () => {
    var calories = 0;
    this.props.nutrition.map(data => {
      data.foods.map(food => {
        calories += food.calories;
      });
    });
    return calories;
  };
  render() {
    const caloriesDone = this.getCaloriesDone();
    return (
      <ScrollView>
        <View elevation={5} style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.boldText}>Good morning, {this.props.userName}</Text>
              <View style={styles.normalTextContainer}>
                <Text style={styles.normalText}>
                  Eat the right amount of food and stay hydrated through the day
                </Text>
              </View>
              <TouchableHighlight
                underlayColor="rgba(73,182,77,1,0.9)"
                onPress={() => this.onPressDetailsText()}
              >
                <Text style={styles.detailText}>More details</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.photoContainer}>
              <View style={styles.greenDot}></View>
              <Image style={styles.userPhoto} source={require('../../../assets/icons/avatar.png')}   />
            </View>
          </View>
          <TouchableHighlight
            style={styles.infoContainer}
            underlayColor="rgba(73,182,77,1,0.9)"
            onPress={() => this.onPressNutrition()}
          >
            <View style={styles.rowContainer}>
              <Image
                style={styles.questionIcon}
                source={require('../../../assets/icons/world.png')}
              />
              <View style={styles.columnContainer}>
                <View style={styles.rowContainer2}>
                  <View>
                    <View style={styles.textContainer1}>
                      <Text style={styles.mainText}>Parametro di desorbimento</Text>
                    </View> 
                    <View style={styles.dataConteiner}>
                      <Text style={styles.secText}>
                        7000 / 10000
                      </Text>
                    </View>
                  </View> 
                <View
                    style={
                      caloriesDone > this.props.nutritionGoal
                        ? styles.warningBtnContainer
                        : styles.btnContainer
                    }
                  >
                    <Text
                      style={
                        caloriesDone > this.props.nutritionGoal
                          ? styles.warningBtnText
                          : styles.btnText
                      }
                    >
                      {caloriesDone > this.props.nutritionGoal ? 'Warning' : 'On'}
                    </Text>
                  </View>
                </View>
                <View style={styles.ProgressBar}>
                    <ProgressBar 
                    progress={0.7}
                    color={'rgb(158,191,249)'}
                    borderColor= {'#039be5'}
                    />
                  </View>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.infoContainer}
            underlayColor="rgba(73,182,77,1,0.9)"
            onPress={() => this.props.navigation.navigate('Water')}
          >
            <View style={styles.rowContainer}>
              <Image
                style={styles.questionIcon}
                source={require('../../../assets/icons/colorWater.png')}
              />
              <View style={styles.columnContainer}>
                <View style={styles.rowContainer2}>
                  <View>
                    <View style={styles.textContainer2}>
                      <Text style={styles.mainText}>Water</Text>
                    </View> 
                    <View style={styles.dataConteiner}>
                      <Text style={styles.secText}>
                        {this.props.waterDone} / {this.props.waterGoal} glasses
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      this.props.waterDone <= this.props.waterGoal / 2
                        ? styles.warningBtnContainer
                        : styles.btnContainer
                    }
                  >
                    <Text
                      style={
                        this.props.waterDone <= this.props.waterGoal / 2
                          ? styles.warningBtnText
                          : styles.btnText
                      }
                    >
                      {this.props.waterDone <= this.props.waterGoal / 2 ? 'Warning' : 'On'}
                    </Text>
                  </View>
                </View>
                  <View style={styles.ProgressBar}>
                    <ProgressBar 
                    progress={this.props.waterDone / this.props.waterGoal}
                    color= {'rgb(226,135,247)'}
                    borderColor= {'rgb(227,85,166)'}
                    />
                  </View>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.infoContainer}
            underlayColor="rgba(73,182,77,1,0.9)"
            onPress={() => this.onPressNutrition()}
          >
            <View style={styles.rowContainer}>
              <Image
                style={styles.questionIcon}
                source={require('../../../assets/icons/dish.png')}
              />
              <View style={styles.columnContainer}>
                <View style={styles.rowContainer2}>
                  <View>
                    <View style={styles.textContainer3}>
                      <Text style={styles.mainText}>Nutrition</Text>
                    </View> 
                    <View style={styles.dataConteiner}>
                      <Text style={styles.secText}>
                      {caloriesDone} cal/ {this.props.nutritionGoal} cal
                     
                      </Text>
                    </View>
                  </View>
                  <View
                    style={
                      caloriesDone > this.props.nutritionGoal
                        ? styles.warningBtnContainer
                        : styles.btnContainer
                    }
                  >
                    <Text
                      style={
                        caloriesDone > this.props.nutritionGoal
                          ? styles.warningBtnText
                          : styles.btnText
                      }
                    >
                      {caloriesDone > this.props.nutritionGoal ? 'Warning' : 'On'}
                    </Text>
                  </View>
                </View>
                <View style={styles.ProgressBar}>
                    <ProgressBar 
                    progress={caloriesDone/this.props.nutritionGoal}
                    color= {'rgb(255,126,121)'}
                    borderColor= {'rgb(227,85,166)'}
                    />
                  </View>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.infoContainer}
            underlayColor="rgba(73,182,77,1,0.9)"
            /*onPress={() => }*/
          >
            <View style={styles.rowContainer}>
              <Image
                style={styles.questionIcon}
                source={require('../../../assets/icons/manWalk.png')}
              />
              <View style={styles.columnContainer}>
                <View style={styles.rowContainer2}>
                  <View>
                    <View style={styles.textContainer4}>
                      <Text style={styles.mainText}>Percorsi salutari</Text>
                    </View> 
                    <View style={styles.dataConteiner}>
                      <Text style={styles.secText}>
                      4 km/ 8 km
                     
                      </Text>
                    </View>
                  </View>
                  <View style={styles.warningBtnContainer}>
                    <Text style={styles.warningBtnText}>Warning</Text>
                  </View>
                </View>
                <View style={styles.ProgressBar}>
                    <ProgressBar 
                    progress={0.7}
                    color= {'rgb(135,205,99)'}
                    borderColor= {'rgb(136,160,103)'}
                    />
                  </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    waterDone: state.water.waterDone,
    waterGoal: state.water.waterGoal,
    nutritionGoal: state.nutrition.nutritionGoal,
    nutrition: state.nutrition.nutrition,
    userName: state.registration.userName,
    userPhoto: state.registration.userPhoto
  };
}

export default connect(
  mapStateToProps,
  null
)(HomeScreen);
