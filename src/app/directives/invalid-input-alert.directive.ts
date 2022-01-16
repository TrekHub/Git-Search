import { Directive , ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appInvalidInputAlert]'
})
export class InvalidInputAlertDirective {

  @Input()
  errStat!: boolean;

 
  

  constructor(private elem:ElementRef) {

    if(this.errStat){
      this.elem.nativeElement.classList.add("show")
    }

    
   }

}
