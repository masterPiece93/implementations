import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { POCAngularGridComponent } from "./POC_AnglrGrid/POC_AnglrGrid.component";

const POC_AnglrGrid_routes:Routes = [
    {path:'',component:POCAngularGridComponent}
]
@NgModule({
    imports:[RouterModule.forChild(POC_AnglrGrid_routes)],
    exports:[RouterModule]
})
export class POCAngularGridRouteModule{

}