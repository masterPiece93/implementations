import { NgModule } from "@angular/core";

import { POCAngularGridComponent } from "./POC_AnglrGrid/POC_AnglrGrid.component";
import { POCAngularGridRouteModule } from "./POC_AnglGrid-routing.module";
import { SharedModule  } from "../../shared-module/shared.module";
@NgModule({
    declarations:[POCAngularGridComponent],
    imports:[POCAngularGridRouteModule, SharedModule],
    providers:[]
})
export class POC_AngGridModule{
}