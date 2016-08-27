import { Pipe } from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

@Pipe({ name: 'sample' })
export class Sample {
    constructor(private sanitizer: DomSanitizationService) { }

    transform(style) {
        return "Hello world"
    }
}