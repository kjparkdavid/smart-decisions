import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoicesPageRoutingModule } from './choices-routing.module';

import { ChoicesPage } from './choices.page';
import { CustomFloatingInputComponentModule } from '../component/custom-floating-input/custom-floating-input.component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChoicesPageRoutingModule,
        CustomFloatingInputComponentModule,
    ],
    declarations: [ChoicesPage],
})
export class ChoicesPageModule {}
