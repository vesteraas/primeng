import {Component} from '@angular/core';
import {Menubar} from '../../../components/menubar/menubar';
import {CodeHighlighter} from '../../../components/codehighlighter/codehighlighter';
import {TabView} from '../../../components/tabview/tabview';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    templateUrl: 'showcase/demo/menubar/menubardemo.html',
    directives: [Menubar,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class MenubarDemo {

}