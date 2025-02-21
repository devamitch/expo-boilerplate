import { Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { windowHeight, windowWidth } from '.';

export const isAndroid = Platform.OS === 'android';

export const isAndroid12OrGreater = () => {
	return isAndroid && Number(Platform.Version) > 30;
};

export const isRunningInExpoGo = Constants.appOwnership === 'expo';

export function isIphoneX() {
	'worklet';

	const dimen = { height: windowHeight, width: windowWidth };

	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTV &&
		(dimen.height === 780 ||
			dimen.width === 780 ||
			dimen.height === 812 ||
			dimen.width === 812 ||
			dimen.height === 844 ||
			dimen.width === 844 ||
			dimen.height === 896 ||
			dimen.width === 896 ||
			dimen.height === 926 ||
			dimen.width === 926)
	);
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
	if (isIphoneX()) {
		return iphoneXStyle;
	}

	return regularStyle;
}

export function getStatusBarHeight(safe) {
	return Platform.select({
		ios: ifIphoneX(safe ? 44 : 30, 20),
		android: StatusBar.currentHeight,
		default: 0,
	});
}

export function getBottomSpace() {
	'worklet';

	return isIphoneX() ? 34 : 0;
}

// guideline height for standard 5" device screen is 680
export const RFValue = (fontSize: number, standardScreenHeight: number = 680) => {
	const standardLength = windowWidth > windowHeight ? windowWidth : windowHeight;

	const offset =
		(windowWidth > windowHeight ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight) ||
		0;

	const deviceHeight =
		isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength;

	const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;

	const match = Math.round(heightPercent);

	return match;
};

export const RFValue2 = (fontSize: number, standardScreenHeight: number = 680) => {
	'worklet';

	const standardLength = (windowWidth > windowHeight ? windowWidth : windowHeight) || 0;

	const offset =
		(windowWidth > windowHeight ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight) ||
		0;

	const deviceHeight =
		(isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength) || 0;

	const heightPercent = (fontSize * deviceHeight) / standardScreenHeight || 0;

	const match = Math.round(heightPercent) || fontSize;

	return match;
};
