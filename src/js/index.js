import 'expose-loader?$!jquery';
import 'expose-loader?jQuery!jquery';

// polyfills
import 'core-js/features/object/assign';
import 'core-js/features/string/repeat';
import 'core-js/features/string/pad-start';
import 'core-js/features/string/pad-end';
import 'core-js/features/global-this';

import "./modules/validate";
import "./modules/sliders";
import "./modules/modals";
import "./modules/spots";
import "./modules/quizzes";

import './includes/header';
import './includes/footer';
import './includes/pay';
import './includes/report';
import './includes/plans';

// import './blocks/page';
