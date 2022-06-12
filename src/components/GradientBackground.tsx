import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode
  from: string
  to: string
}

export function GradientBackGround({children, from, to}: ContainerProps){
	return(
		<LinearGradient
			style={{flex: 1}}
			colors={[from,to]}

		>{children}</LinearGradient>
	);
}
