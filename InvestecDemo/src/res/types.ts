export interface GreetingData {
  name: string;
  message: string;
}
export interface Greeting {
  data: GreetingData;
  error: string;
}
export interface HomeScreen {
  navigation: any;
  greeting: Greeting;
}

export interface FirstScreen {
  navigation: any;
  greeting: Greeting;
  prepareGreeting: (name: string) => void;
}

export interface SecondScreen {
  navigation: any;
  greeting: Greeting;
}

export interface State {
  greeting: Greeting;
}
