// 外部库集合
import { marked } from "marked";
import highlight from "highlight.js";
import PopPrint from "../lib/outSide/PopPrint";

const MODs = {
    PopPrint() {
        this.PopPrint = new PopPrint();
    },
    mathjax() {
        this.mathjax = {
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
    },
    highlight() {
        this.highlight = highlight;
        this.highlight.highlightAll();
    },
    marked() {
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
                return this.highlight.highlightAuto(code).value;
            }
        });
        this.marked = marked;
    },
};
export default MODs;
