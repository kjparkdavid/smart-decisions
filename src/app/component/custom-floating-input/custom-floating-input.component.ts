import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-custom-floating-input',
    templateUrl: './custom-floating-input.component.html',
    styleUrls: ['./custom-floating-input.component.scss'],
})
export class CustomFloatingInputComponent implements OnInit {
    @Output() addListItemEvent = new EventEmitter<string>();
    inputValue = '';

    constructor() {}

    ngOnInit() {}

    // Get value from ion-textarea and store its value
    inputChanged(input) {
        this.inputValue = input.srcElement.value;
    }

    // Detect enter key to add to the list and emit addListItemEvent output event
    onChange(event) {
        // enter key pressed
        if (event.keyCode === 13) {
            if (this.inputValue) {
                this.addListItemEvent.emit(this.inputValue);
            }
            event.preventDefault();
            this.inputValue = '';
        }
    }
}
