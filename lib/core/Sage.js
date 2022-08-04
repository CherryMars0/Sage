import "../../assets/default.css";
import "../../public/index.html";
import SageRuntime from "./SageRuntime.js";
import VirtualNode from "./SageVirtualNode";

class Sage {
    constructor() {
        this._root = document.getElementById('Application');
        this._store = {};
        this.$add = SageRuntime.exec;

        //初始化函数
        this.init();
    };

    get root() {
        return this._root;
    };

    get store() {
        return this._store;
    };

    set store(store) {
        this._store = store;
    }

    $render(componment) {
        let node = SageRuntime.render(componment);
        new VirtualNode(node.script.data, node.content, this.root, node.script.name, node.script.func);
    };

    init() {
        document.title = "Sage";
        console.log("%c building Sage framework v0.1 , powered by Marvelous !", "color:blue;font-weight:bold;");
    }
};
export default Sage;