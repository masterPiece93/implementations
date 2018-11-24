import { NgModule,ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { GridComponent } from "./grid/grid.component";
import { GridFilterPipe,GridSortPipe } from "./grid/grid.pipe";

@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[GridComponent, GridFilterPipe, GridFilterPipe],
    exports:[GridComponent, GridFilterPipe, GridFilterPipe,CommonModule,FormsModule]
})
export class SharedModule {
}