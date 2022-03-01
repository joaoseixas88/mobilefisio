import { StackNavigationProp  } from '@react-navigation/stack'
import type { RouteProp } from '@react-navigation/native';
import { Patient } from '../../utils/types';


export type RootStackParamList = {
    Routes: undefined;
    Patient: {patient: Patient};
  };

export type NavigationProps = StackNavigationProp<
RootStackParamList,
  'Patient'
>;



export type RoutesProps = RouteProp<RootStackParamList, 'Patient'>;


