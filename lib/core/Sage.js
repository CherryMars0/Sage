import "../../assets/default.css";
import "../../public/index.html";
import SageRuntime from "./SageRuntime.js";
import VirtualNode from "./SageVirtualNode";

class Sage {
    constructor(MOD) {
        //初始化函数
        this.init(MOD);

        this._root = null;
        this._store = {};
        // this.$add = SageRuntime.exec;
    };

    get root() {
        return this._root;
    };
    set root(root) {
        this._root = root;
    };

    get store() {
        return this._store;
    };

    set store(store) {
        this._store = store;
    };

    init(MOD) {
        window.Sage = this;
        SageRuntime.exec.bind(this)(MOD);
        document.title = "Sage";
        console.log("%c building Sage framework v0.1 , powered by Marvelous !", "color:blue;font-weight:bold;");
    };


    $render(componment) {
        let node = SageRuntime.render(componment);
        new VirtualNode(node.script.db, node.content, this.root, node.script.name, node.script.func);
    };
    $mount(DOM,Index) {
        this.root = document.querySelector(DOM);
        this.$render(Index);
    };
};
export default Sage;