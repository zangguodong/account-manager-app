import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure: true,
})
export class PurePipe implements PipeTransform {
  transform(value: any, ...argFuncs): any {
    return argFuncs.reduce((result, func) => func(result), value);
  }
}
