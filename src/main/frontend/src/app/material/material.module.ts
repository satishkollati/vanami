import { NgModule } from '@angular/core';
import {MatSidenavModule, MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatSidenavModule,
            MatButtonModule,
            MatMenuModule,
            MatIconModule,
            MatToolbarModule
           ],
  exports: [MatSidenavModule,
            MatButtonModule,
            MatMenuModule,
            MatIconModule,
            MatToolbarModule
           ]
})
export class CustomMaterialModule { }