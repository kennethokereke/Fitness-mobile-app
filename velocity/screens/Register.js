import React, { Component } from 'react';
import {
  Image, StyleSheet, Dimensions, TouchableWithoutFeedback,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Block, Text, Input } from '../components';
import * as theme from '../constants/theme';

const { height } = Dimensions.get('window');

class Register extends Component {
  state = {
    active: null,
  }

  handleType = id => {
    const { active } = this.state;
    this.setState({ active: active === id ? null : id });
  }

  render() {
    const { navigation } = this.props;
    const { active } = this.state;

    const muscleIcon = (
      <Image
        source={require('../assets/images/icons/muscles.png')}
        style={{ height: 16, width: 14 }}
      />
    );

    const sweatIcon = (
      <Image
        source={require('../assets/images/icons/sweat.png')}
        style={{ height: 14, width: 14 }}
      />
    );

    const checkIcon = (
      <Image
        source={require('../assets/images/icons/check.png')}
        style={{ height: 14, width: 14 }}
      />
    );

    

    return (
      <KeyboardAwareScrollView style={{ marginVertical: 40 }} showsVerticalScrollIndicator={false}>
        <Block center middle style={{ marginBottom: 40, marginTop: 20 }}>
          <Image
            source={require('../assets/images/Base/velocity.png')}
            style={{ height: 50, width: 233 }}
          />
        </Block>
        <Block flex center>
          <Text h3 style={{ marginBottom: 6 }}>
            Get started for free
          </Text>
          <Text paragraph color="black3">
            Free forever. No credit card to register.
          </Text>
          <Block row style={{ marginHorizontal: 28, marginTop: 40, }}>
            <TouchableWithoutFeedback
              onPress={() => this.handleType('Gain Muscle')}
              style={active === 'Gain Muscle' ? styles.activeBorder : null}
            >
              <Block
                center
                middle
                style={[
                  styles.card,
                  { marginRight: 20, },
                  active === 'Gain Muscle' ? styles.active : null
                ]}
              >
                {
                  active === 'Gain Muscle' ? (
                    <Block center middle style={styles.check}>
                      {checkIcon}
                    </Block>
                  ) : null
                }
                <Block center middle style={styles.icon}>
                  {muscleIcon}
                </Block>
                <Text h4 style={{ marginBottom: 11 }}>Gain Muscles</Text>
                <Text paragraph center color="black3">Full access to all worokut plans</Text>
              </Block>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => this.handleType('Get Shredded')}
              style={active === 'Get Shredded' ? styles.activeBorder : null}
            >
              <Block
                center
                middle
                style={[
                  styles.card,
                  active === 'Get Shredded' ? styles.active : null
                ]}
              >
                {
                  active === 'Get Shredded' ? (
                    <Block center middle style={styles.check}>
                      {checkIcon}
                    </Block>
                  ) : null
                }
                <Block center middle style={styles.icon}>
                  {sweatIcon}
                </Block>
                <Text h4 style={{ marginBottom: 11 }}>Get Shredded</Text>
                <Text paragraph center color="black3">full access to intense workouts</Text>
                
              </Block>
             
            </TouchableWithoutFeedback>

          </Block>
          <Block center style={{ marginTop: 25 }}>
            <Input
              full
              label="Full name"
              style={{ marginBottom: 25 }}
            />
            <Input
              full
              email
              label="Email address"
              style={{ marginBottom: 25 }}
            />
            <Input
              full
              password
              label="Password"
              style={{ marginBottom: 25 }}
            />

            <Button
              full
              style={{ marginBottom: 12 }}
              onPress={() => navigation.navigate('Overview')}
            >
              <Text button>Create Account</Text>
            </Button>
            <Text paragraph color="gray">
              Don't have an account? <Text
                height={18}
                color="red"
                onPress={() => navigation.navigate('Login')}>
                Sign in
              </Text>
            </Text>
          </Block>
        </Block>
      </KeyboardAwareScrollView>
    )
  }
}

export default Register;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
  },
  active: {
    borderColor: theme.colors.darkred,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: theme.colors.darkred,
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  icon: {
    flex: 0,
    height: 48,
    width: 48,
    borderRadius: 48,
    marginBottom: 15,
    backgroundColor: theme.colors.black
  },
  check: {
    position: 'absolute',
    right: -9,
    top: -9,
  }
})