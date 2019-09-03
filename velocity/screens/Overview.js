import React, { Component } from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Block, Card, Text, Icon, Label } from '../components';
import * as theme from '../constants/theme';

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  food: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  }
});

class Overview extends Component {
  static navigationOptions = {
    headerLeftContainerStyle: {
      paddingLeft: 24
    },
    headerRightContainerStyle: {
      paddingRight: 24
    },
    headerLeft: (
      <TouchableOpacity><Icon menu /></TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity><Icon notification /></TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle><Text h4>Overview</Text></Block>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
          <Card row middle style={styles.margin}>
            <Block flex={1.2} center middle style={{ marginRight: 20 }}>
              <Text light height={43} size={36} spacing={-0.45}>2,900</Text>
              <Text ligth caption center style={{ paddingHorizontal: 16, marginTop: 3 }}>
                GOAL
              </Text>
            </Block>
            <Block>
              <Text paragraph color="black3">
                To calculate your remaining calorie intake 
                minus your goal to your calorie intake and then
                add it to the calories you have burned
              </Text>
            </Block>
          </Card>

          <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
              <Icon vehicle />
              <Text h2 style={{ marginTop: 17 }}>500</Text>
              <Text paragraph color="gray">Calorie intake</Text>
            </Card>
            
            <Card middle style={{ marginLeft: 7 }}>
              <Icon distance />
              <Text h2 style={{ marginTop: 17 }}>830</Text>
              <Text paragraph color="gray">Calorie burn</Text>
            </Card>
          </Block>

          <Card
            title="REMAINING CALORIE INTAKE"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block row right>
              <Block flex={2} row center right>
                <Label lightred />
                <Text paragraph color="gray">Today</Text>
              </Block>
              <Block row center right>
                <Label purple />
                <Text paragraph color="gray">Yesterday</Text>
              </Block>
            </Block>
            <Block>
              <Text h2 style={{ marginBottom: 17 }}>2,600</Text>
            </Block>
          </Card>

          <Card
            title="BREAKFAST"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block style={styles.food}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                  <Image
                source={require('../assets/images/icons/sausages.png')}
               style={{ height: 50, width: 50 }}
                />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Cooked Sausages</Text>
                    <Text paragraph color="gray">3 Pieces</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">Calories</Text>
                    <Text paragraph right color="gray">150</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.food}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                  <Image
                source={require('../assets/images/icons/juice.png')}
               style={{ height: 50, width: 50 }}
                />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Juice</Text>
                    <Text paragraph color="gray">2 1/2 Cups</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">Calories</Text>
                    <Text paragraph right color="gray">100</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block style={styles.food}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                  <Image
                source={require('../assets/images/icons/bread.png')}
               style={{ height: 30, width: 30 }}
                />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Wheat Bread</Text>
                    <Text paragraph color="gray">1 Piece </Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">Calories</Text>
                    <Text paragraph right color="gray">100</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.food}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                  <Image
                source={require('../assets/images/icons/eggs.png')}
               style={{ height: 50, width: 50 }}
                />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Eggs</Text>
                    <Text paragraph color="gray">2 Pieces</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">Calories</Text>
                    <Text paragraph right color="gray">150</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card>


          <Card
            title="History"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block>
              
            </Block>
            <Block row space="between" style={{ marginTop: 25 }}>
              <Block>
                <Text h2 light>2,600</Text>
                <Block row center>
                  <Label lightred />
                  <Text paragraph color="gray">Today</Text>
                </Block>
              </Block>
              <Block>
                <Text h2 light>13</Text>
                <Block row center>
                  <Label purple />
                  <Text paragraph color="gray">Yesterday</Text>
                </Block>
              </Block>
            </Block>
          </Card>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Overview;