import { helper } from '@ember/component/helper';

const carTypes = [
  'Sports',
  'Luxury',
  'Racing'
];

/**
 * Not too sure the purpose of this, other than to ensure the types exist.. otherwise give it a default type.
 * @param {any} param0
 */
export function carModelType([carType]) {
  if (carTypes.indexOf(carType) != -1) {
    return carType;
  }

  return 'None';
}

export default helper(carModelType);
