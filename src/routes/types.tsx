import { StackNavigationProp  } from '@react-navigation/stack'
import type { RouteProp } from '@react-navigation/native';


export interface PatientProps{
  id: string;
  name: string
  age: string;
  diagnosis: string;
  price: string;  
  assistences: string[]
}
export type RootStackParamList = {
    Login: undefined;
    Routes: undefined;
    Patient: {patientId: string, serviceId: string;};
    ProductivityByDate: undefined
  };

export type NavigationProps = StackNavigationProp<
RootStackParamList,
  'Patient'  
>;



export type RoutesProps = RouteProp<RootStackParamList, 'Patient'>;


