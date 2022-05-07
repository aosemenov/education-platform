import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'jquery.dotdotdot';
import 'remodal';

import '../styles/index.scss';

import index from './modules/index';
import tabs from './modules/tabs';
import authSystem from './modules/auth';
import accordion from './modules/accordion';
import formField from './modules/form-field';
import dotdotdot from "./modules/dotdotdot";

const app = {

    init() {
        dotdotdot();
        accordion();
        index();
        tabs();
        authSystem();
        formField();
    },
    load() {
    },
    resize() {},
    scroll() {}
};

$(() => {
    app.init();
    $(window).on('load', app.load);
    $(window).on('resize', app.resize);
    $(window).on('scroll', app.scroll);
});
