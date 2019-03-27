import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncyclopediaRoutingModule } from './encyclopedia-routing.module';
import { EncyclopediaComponent } from './encyclopedia.component';

@NgModule({
  declarations: [EncyclopediaComponent],
  imports: [
    CommonModule,
    EncyclopediaRoutingModule
  ]
})
export class EncyclopediaModule { }
