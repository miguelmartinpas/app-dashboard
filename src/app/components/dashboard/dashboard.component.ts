import { Component, OnInit } from '@angular/core';
import { Hero } from 'types/hero';
import { HeroService }  from 'services/hero';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

    this.options = {
      // https://tiberiuzuld.github.io/angular-gridster2/
      // https://github.com/tiberiuzuld/angular-gridster2/blob/master/src/app/sections/home/home.component.html
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 50,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 8,
      maxCols: 8,
      minRows: 5,
      maxRows: 5,
      maxItemCols: 7,
      minItemCols: 1,
      maxItemRows: 5,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: true,
      keepFixedWidthInMobile: true,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: false,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: true,
      disableWarnings: false,
      scrollToNewItems: false
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0, color: 'purple'},
      {cols: 2, rows: 1, y: 0, x: 2, hasContent: true, color: 'orange'},
      {cols: 2, rows: 1, y: 0, x: 4, label: 'Green box' color: 'green'},
      {cols: 2, rows: 1, y: 0, x: 6, color: 'yellow'},
      {cols: 2, rows: 2, y: 1, x: 0, color: 'brown'},
      {cols: 2, rows: 1, y: 1, x: 2, color: 'grey'},
      {cols: 2, rows: 2, y: 1, x: 4, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2', color: 'black'},
      {cols: 1, rows: 1, y: 1, x: 6, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2', color: 'violet'},
      {cols: 1, rows: 2, y: 1, x: 7, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled', color: 'olive'},
      {cols: 3, rows: 1, y: 2, x: 0, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled', color: 'pink'},
      {cols: 3, rows: 2, y: 2, x: 4, color: 'red'}
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

}
