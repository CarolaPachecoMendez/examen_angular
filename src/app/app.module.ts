import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AgmCoreModule } from '@agm/core';
import{ FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CompunoComponent } from './componentes/compuno/compuno.component';
import { CompdosComponent } from './componentes/compdos/compdos.component';
import { ComptresComponent } from './componentes/comptres/comptres.component';
import { CompcuatroComponent } from './componentes/compcuatro/compcuatro.component';
import { CompcincoComponent } from './componentes/compcinco/compcinco.component';
import { CompseisComponent } from './componentes/compseis/compseis.component';
import { CompsieteComponent } from './componentes/compsiete/compsiete.component';
import { CompochoComponent } from './componentes/compocho/compocho.component';
import { CompnueveComponent } from './componentes/compnueve/compnueve.component';
import { FormattextPipe } from './pipes/formattext.pipe';
import { FormatdataPipe } from './pipes/formatdata.pipe';
import { MapsService } from './services/maps.service';

@NgModule({
  declarations: [
    AppComponent,
    CompunoComponent,
    CompdosComponent,
    ComptresComponent,
    CompcuatroComponent,
    CompcincoComponent,
    CompseisComponent,
    CompsieteComponent,
    CompochoComponent,
    CompnueveComponent,
    FormattextPipe,
    FormatdataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqQ_FrSr98aV1bpGi2DKKHRgczxr7H5z0'
    })
   ],
  providers: [MapsService],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
