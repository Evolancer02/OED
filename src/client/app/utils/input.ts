/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { GPSPoint } from './calibration';

// Notifies user of msg.
// TODO isValidGPSInput uses alert so continue that. Maybe all should be changed but this impacts other parts of the code.
// Note this causes the modal to close but the state is not reset.
// Use a function so can easily change how it works.
/**
 * Causes a window popup with msg
 * @param msg message to display
 */
export function notifyUser(msg: string) {
	window.alert(msg);
}

/**
 * get string value from GPSPoint or null.
 * @param gps GPS point to get value from and can be null
 * @returns string to represent the GPS value or empty string if null
 */
export function getGPSString(gps: GPSPoint | null) {
	if (gps === null) {
		//  if gps is null return empty string value
		return '';
	}
	else if (typeof gps === 'object') {
		// if gps is an object parse GPSPoint and return string value
		const json = JSON.stringify({ gps });
		const obj = JSON.parse(json);
		return `${obj.gps.latitude}, ${obj.gps.longitude}`;
	}
	else {
		// Assume it is a string that was input.
		return gps
	}
}

/**
 * Checks if the input is null and returns empty string if that is the case. Otherwise return input.
 * This is needed because React does not want values to be of type null for display and null is the
 * state for some of DB values. This only should change what is displayed and not the state or props.
 * @param item item to check if null and convert to empty string
 * @returns item if not null or empty string
 */
export function nullToEmptyString(item: any) {
	if (item === null) {
		return '';
	} else {
		return item;
	}
}
