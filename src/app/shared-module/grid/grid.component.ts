import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from "@angular/core";
import { GridFilterPipe,GridSortPipe } from "./grid.pipe";
@Component({
    selector:'AnglrGrid',
    templateUrl:'./grid.component.html',
    styleUrls:['./grid.component.css']
})
export class GridComponent implements OnInit {

    @Input('headerNames') columns: any[];
    @Input() rowData: any;
    OriginalRowData: any;
    search: any = {};
    direction:boolean = true;
    fields:string;

    constructor(){}

    ngOnInit(){}

    ngOnChanges(change: SimpleChanges){
        if(!change.firstChange) { this.OriginalRowData = change.rowData.currentValue; }
    }
    private filterData() {
        //always perform search on original data
        this.rowData = this.OriginalRowData;
        let keys = Object.keys(this.search).filter(k => { if(this.search[k] != "") return k });
        if(keys.length < 1) return this.rowData = this.OriginalRowData;
        this.rowData = this.rowData.filter(o => {
            let count = 0;
            keys.forEach(key => {
                let count = 0;
                keys.forEach(key => {
                    if(o[key].toString().toLowerCase().includes(this.search[key].toLowerCase())){
                        count+=1;
                    }
                })
            })
            if(keys.length == count){
                console.log(o);
                return o;
            }
        }); 
    }
    sortGrid( $event ){
        this.direction = !this.direction;
        var rawStr = $event.target.innerHTML;
        var elementId = $event.target.id;
        this.fields = this.columns[elementId.split('_')[1]].headerName;

        var encodedStr = rawStr.replace(/[\u00A0-\u9999<>\&]/gim,function (i){
            return '&#' + i.charCodeAt(0) + ';'
        });

        rawStr = encodedStr == "&#10514;" ? "&#10515" : "&#10514";
        $event.target.innerHTML = rawStr;

        for (let i = 0; i < this.columns.length; i++) {
            if('headerId_'+i == elementId){
                continue;
            }
            document.getElementById('headerId_'+i).innerHTML = '&#10514';
        }
    }
}