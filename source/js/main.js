import { removeNoJs } from "./modules/no-js.js";
import { setRoute } from "./router.js";
import { indexPage } from "./pages/index.js";
import { formPage } from "./pages/form.js";

removeNoJs();
setRoute('/index.html', indexPage);
setRoute('/form.html', formPage);
