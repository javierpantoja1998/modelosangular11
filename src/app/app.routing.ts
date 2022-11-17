import { HomeComponent } from "./components/home/home.component";
import { PadrecomicsComponent } from "./components/padrecomics/padrecomics.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
import { PlantillasComponent } from "./components/plantillas/plantillas.component";
import { MaestrodetalleComponent } from "./components/maestrodetalle/maestrodetalle.component";
import { DetallesempleadoComponent } from "./components/detallesempleado/detallesempleado.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//DEFINIMOS UN ARRAY DE OBJETOS Routes
const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "padre", component: PadrecomicsComponent
    },
    {
        path: "comicsinyeccion", component: ComicsinyeccionComponent
    },
    {
        path: "personasapi", component: PersonasapiComponent
    },
    {
        path: "empleadossalario", component: EmpleadossalarioComponent
    },
    {
        path: "empleadosoficio", component: EmpleadosoficioComponent
    },
    {
        path: "plantillasfuncion", component: PlantillasComponent
    },
    {
        path: "maestrodetalle", component: MaestrodetalleComponent
    },
    {
        path: "detallesempleado/:id", component: DetallesempleadoComponent
    },
]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

