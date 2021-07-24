import { removeNoJs } from './modules/no-js.js';
import { setHeader } from './modules/header.js';
import { setRoute } from './router.js';
import { indexPage } from './pages/index.js';
import { formPage } from './pages/form.js';
import { catalogPage } from './pages/catalog.js'

removeNoJs();
setHeader();

setRoute('/index.html', indexPage);
setRoute('/form.html', formPage);
setRoute('/catalog.html', catalogPage);
