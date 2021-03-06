import {Component} from '@angular/core';
import {Lightbox} from '../../../components/lightbox/lightbox';
import {CodeHighlighter} from '../../../components/codehighlighter/codehighlighter';
import {TabView} from '../../../components/tabview/tabview';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    templateUrl: 'showcase/demo/lightbox/lightboxdemo.html',
    directives: [Lightbox,TabView,TabPanel,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class LightboxDemo {

    images: string[] = ['sopranos1', 'sopranos2', 'sopranos3', 'sopranos4'];
}