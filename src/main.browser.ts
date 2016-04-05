import {bootstrap} from 'angular2/platform/browser';
import {CORE_DIRECTIVES} from "angular2/common";

import {App} from './app';

bootstrap(App, [CORE_DIRECTIVES]).catch(err => console.error(err));

