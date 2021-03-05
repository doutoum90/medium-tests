import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';
 
@Directive({
 selector: 'tab-item'
})
export class TabsItemDirective {
    @ContentChild('template')
    template!: TemplateRef<any>;
 
    @ContentChild('headerTemplate')
    headerTemplate!: TemplateRef<any>;
 
    constructor() {
    }
}