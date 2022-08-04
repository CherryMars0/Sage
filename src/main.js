// 框架导入
import Summer from "../lib/core/Summer.js";
// 外部JS库导入
import MODs from './MODs.js';
// componment 导入
import Top from './components/Top.mar';






window.mini_blog = new Summer();

mini_blog.$add(MODs.mathjax);
mini_blog.$add(MODs.Handlebars);
mini_blog.$add(MODs.marked);
mini_blog.$add(MODs.highlight);
// mini_blog.$add(MODs.PopPrint);



mini_blog.$render(Top);

console.log(mini_blog);


