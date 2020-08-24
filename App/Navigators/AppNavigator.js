import { createAppContainer, createStackNavigator } from 'react-navigation'

// import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
// import AllEventsScreen from '../Containers/AllEvents/AllEventsScreen'
import SingleEventScreen from '../Containers/SingleEvent/SingleEventScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    SplashScreen: SplashScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Interests: InterestsScreen,
    Events: AllEventsScreen,
    SingleEvent: SingleEventScreen,
    UserProfile: UserProfileScreen,
    Chat: ChatScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: SplashScreen,
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'screen ',
  }
)

export default createAppContainer(StackNavigator)
