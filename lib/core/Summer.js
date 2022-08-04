import "../../assets/default.css";
import "../../public/index.html";
import SummerRuntime from "./SummerRuntime.js";
import VirtualNode from "./SummerVirtualNode";

class Summer {
    constructor() {
        this._root = document.getElementById('Application');
        this._store = {};
        this.$add = SummerRuntime.exec;

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
        let node = SummerRuntime.render(componment);
        new VirtualNode(node.script.data, node.content, this.root, node.script.name, node.script.func);
    };

    init() {
        document.title = "Summer";
        console.log("%c building Summer framework v0.1 , powered by Marvelous !", "color:blue;font-weight:bold;");
    }
};
export default Summer;