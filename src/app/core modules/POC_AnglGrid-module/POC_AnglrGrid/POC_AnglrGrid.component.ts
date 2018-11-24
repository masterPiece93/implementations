import { Component } from "@angular/core";
import { GridComponent } from "../../../shared-module/grid/grid.component";
@Component({
    templateUrl:'POC_AnglrGrid.component.html',
    styleUrls:['POC_AnglrGrid.component.css']
})
export class POCAngularGridComponent {

    headers:any[] = [
        {headerName:'first'},
        {headerName:'second'},
        {headerName:'third'}
    ]

    constructor(){
    }
}