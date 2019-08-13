import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import * as textMask from 'vanilla-text-mask/dist/vanillaTextMask.js';
    
@Directive({
    selector: `app-mask, [app-mask], [appMask]`
})
export class AppMaskDirective implements OnInit, OnDestroy {
@HostBinding('class.fed-mask') compClass = true;
    
    private maskedInputController;
    @Input() appMask = {
        mask: [],
        showMask: false,
        guide: true,
        placeholderChar: '_'
    };
    
    constructor(private element: ElementRef) {}
    
    ngOnInit(): void {
        this.maskedInputController = textMask.maskInput({inputElement: this.element.nativeElement,...this.appMask
        });
    }
    
    ngOnDestroy() {
        this.maskedInputController.destroy();
    }

    obterNomeItem(pItem) {
        if (pItem) { return pItem.nome; }
    }
}