import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PopupModal } from './popup.modal';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
    @Input() modalObj: PopupModal;
    @Output('closeEvent') closed = new EventEmitter();
    @Output('saveChanges') saveData = new EventEmitter();

    ngOnInit() {
        console.log(`modalObj?.btnAlign`, this.modalObj?.btnAlign)
    }

    closePopup(){
        this.closed.emit();
    }

    saveEvent(){
        this.saveData.emit();
    }

}