import SageRuntime from "./SageRuntime.js";
class VirtualNode {
    constructor(db, content, parent, name, func) {
        //节点携带数据
        this.db = db;

        //节点名称
        this.name = name;

        //节点内容
        this.content = content;

        //节点中的子节点
        this.children = null;

        //组件所对应的真实节点
        this.element = document.createElement('div');

        //节点的父节点
        this.parent = parent;


        //节点中定义的函数
        this.func = func;


        //初始化函数
        this.init(this.content, this.parent, this.element);
    }

    init = (content, parent, element) => {
        if (typeof parent !== 'object') {
            parent = document.querySelector(parent);
        }

        let regString = /\{\{([^}]+)\}\}/g;
        if (regString.test(content)) {
            let insetExpression = this.regGeneratorInterpolate(content);
            content = insetExpression;
        }

        element.innerHTML = content;
        parent.appendChild(element);

        console.log(this);
    }

    regGeneratorInterpolate = (String) => {
        let reg = /\{\{([^}]+)\}\}/g;
        let Interpolate = String.replace(reg, (a, b) => {
            return SageRuntime.SEngine.call(this, (`${b}`));
        })
        return Interpolate;
    }
}
export default VirtualNode;