import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') isOpen=false; //using css
    @HostListener('click') toggelOpen() //using events
    {
        this.isOpen = !this.isOpen;
    }

 }