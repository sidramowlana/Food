import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') isOpen=false; //using css and dont need to use render
    @HostListener('click') toggelOpen() //using events
    {
        this.isOpen = !this.isOpen;
    }

 }