import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Loader from 'react-loader';


const LoaderComponent = ({ ...props }) => {
	return (
		<div className={props?.loaderClassName}>
			<Backdrop className={props.className} sx={{ color: '#EAD9FC', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgb(243, 236, 252, 0.5)', position: 'absolute', ...props.loaderStyle }} open={(props?.isLoading === null || props?.isLoading === undefined) ? false:props?.isLoading } >
				{(<Loader loaded={false} lines={13} length={2} width={2} radius={4} corners={1} rotate={0} direction={1} color={'#7327CC'} speed={1}
					trail={60} shadow={false} hwaccel={false} opacity={0.8}
					zIndex={2e9} scale={2.00}
					loadedClassName='loadedContent' />)}
				{props.children}
			</Backdrop>
		</div>
	);


	
}

export default LoaderComponent;