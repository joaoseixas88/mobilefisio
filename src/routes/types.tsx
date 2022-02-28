import { StackNavigationProp  } from '@react-navigation/stack'
import type { RouteProp } from '@react-navigation/native';


export type RootStackParamList = {
    Routes: undefined;
    Patient: {patient: Patients};
  };

export type ProfileScreenNavigationProp = StackNavigationProp<
RootStackParamList,
  'Patient'
>;



export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Patient'>;


interface Patients{
    id: string;
    name: string
    age: string;
    diagnosis: string;
    price: string;
    homeCareName: string;
    visits: number;
}