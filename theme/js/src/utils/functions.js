import {browserHistory} from 'react-router';

export function getValueFromUrl(input) {

  const currentLocation = browserHistory.getCurrentLocation();
  const targetProp = currentLocation.query[input];
  return targetProp === undefined ? null : targetProp;

}
