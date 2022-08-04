// 外部库集合
import { marked } from "marked";
import highlight from "highlight.js";
import PopPrint from "../lib/outSide/PopPrint";

const MODs = {
    PopPrint() {
        ; (() => {
            mini_blog.PopPrint = new PopPrint();
        })();
    },
    mathjax() {
        ; (() => {
            mini_blog.MathJax = {
                tex: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                },
                svg: {
                    fontCache: 'global',
                }
            };
            // 动态加载js
            let script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
            script.async = true;
            document.head.appendChild(script);
        })();
    },
    highlight() {
        ; (() => {
            mini_blog.highlight = highlight;
            //mini_blog.highlight.highlightAll();
        })();
    },
    Handlebars() {
        ; (() => {
            mini_blog.Handlebars = {};
        })();
    },
    marked() {
        ; (() => {
            let rendererMD = new marked.Renderer();
            marked.setOptions({
                renderer: rendererMD,
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                highlight: (code) => {
                    return mini_blog.highlight.highlightAuto(code).value;
                }
            });
            mini_blog.marked = marked;
        })();
    },
};
export default MODs;
