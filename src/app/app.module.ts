import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//SERVICIOS
import { ComicsService } from './services/comics.service';
import { PersonasService } from './services/personas.service';
import { EmpleadosService } from './services/empleados.service';
import { PlantillasService } from './services/plantillas.service';

//COMPONENTES
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';
import { PadrecomicsComponent } from './components/padrecomics/padrecomics.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import { MaestrodetalleComponent } from './components/maestrodetalle/maestrodetalle.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    HijocomicComponent,
    PadrecomicsComponent,
    MenuComponent,
    HomeComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    PlantillasComponent,
    MaestrodetalleComponent,
    DetallesempleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders, 
    ComicsService, 
    PersonasService,
    EmpleadosService,
    PlantillasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
