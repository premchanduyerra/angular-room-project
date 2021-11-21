import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  @Input() defaultColor:string='transparent'
  @Input() highlightColor:string='red'


  @HostBinding('style.backgroundColor') backgroundColor !:string;
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement);
    this.backgroundColor=this.defaultColor
  //  this.elementRef.nativeElement.style.backgroundColor="red"
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
  }

@HostListener('mouseenter') onMouseEnter(){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
this.backgroundColor=this.highlightColor
}
@HostListener('mouseleave') onMouseLeave(){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
this.backgroundColor=this.defaultColor
}

}
