import { Pipe } from '@angular/core';

@Pipe({
    name: 'mapToIterable'
})
export class MapToIterablePipe {
    transform(value, args) {
        return Array.from(value);
    }
}