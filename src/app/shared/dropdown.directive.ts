import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostListener('click') onClick(){
    const isOpened=this.eleRef.nativeElement.classList.contains('open');
    if(!isOpened){
      this.renderer.addClass(this.eleRef.nativeElement,'open')
    }
    else{
      this.renderer.removeClass(this.eleRef.nativeElement,'open')
    }
    

   console.log();
    
  }
  
  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

}
