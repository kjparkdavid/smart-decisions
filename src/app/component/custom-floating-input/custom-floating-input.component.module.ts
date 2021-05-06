import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomFloatingInputComponent } from './custom-floating-input.component';

@NgModule({
    declarations: [CustomFloatingInputComponent],
    imports: [CommonModule, IonicModule],
    exports: [CustomFloatingInputComponent],
})
export class CustomFloatingInputComponentModule {}
