import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { DISCOUNT_TYPE } from 'src/app/models/product.model';

export const discountValidator: ValidatorFn = (
  fGroup: AbstractControl
): ValidationErrors | null => {
  const discRate = fGroup.get('discountRate')?.value;
  const discType = fGroup.get('discountType')?.value;
  const price = fGroup.get('price')?.value;
  if (!discType || !discRate || !price) {
    return null;
  }
  if (discType == DISCOUNT_TYPE.FIXED) {
    return discRate <= price ? null : { discountFixedError: true };
  } else if (discType == DISCOUNT_TYPE.PERCENTAGE) {
    return discRate <= 100 ? null : { discountPercentError: true };
  } else {
    return null;
  }
};
