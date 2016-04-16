import {bootstrap} from 'angular2/platform/browser';
import { provide } from 'angular2/core';

import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router';
import rootReducer from './app/reducers';
import {provideStore} from '@ngrx/store';
import {instrumentStore} from '@ngrx/devtools';
import {App} from './app';


bootstrap(App, [
    provideStore(rootReducer, []),
    instrumentStore(),
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' })
]).catch(err => console.error(err));



