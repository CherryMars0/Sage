// 框架导入
import Sage from "../lib/core/Sage.js";
// 外部JS库导入
import MODs from './MODs.js';
// componment 导入
import Top from './components/Top.mar';


new Sage({
    mathjax: MODs.mathjax,
    highlight: MODs.highlight,
    marked: MODs.marked,
}).$mount('#Sage', Top);



// mini_blog.$add(MODs.PopPrint);
console.log(window.Sage);