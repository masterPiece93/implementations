import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filters'
})
export class GridFilterPipe implements PipeTransform{
    transform(){}
}

@Pipe({
    name:'sort'
})
export class GridSortPipe implements PipeTransform {
    transform(items: any[], field: string, direction:boolean): any[]{
        if(!items) return [];

        if(!field) return items;

        if(direction) {
            return items.sort((a,b) => {
                return a[field] - b[field];
            })
        }
        else{
            return items.sort((a,b)=>{
                return b[field] - a[field];
            });
        }
    }
}