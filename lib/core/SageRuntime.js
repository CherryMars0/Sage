const SageRuntime = {
    // 对数据监控( 对象，属性， 回调(属性) )
    watch: (obj, prop, exec) => {
        Object.defineProperty(obj, prop, {
            set: (newValue) => {
                prop = newValue;
                if (typeof exec === 'function') {
                    exec(prop);
                } else if (exec === null) {
                    console.log("set:" + newValue);
                } else if (typeof exec !== 'function') {
                    console.error(exec + ' is not a function !');
                }
            },
            get: () => {
                if (typeof exec === 'function') {
                    exec(prop);
                } else if (exec === null) {
                    console.log("get:" + prop);
                } else if (typeof exec !== 'function') {
                    console.error(exec + ' is not a function !');
                }
                return prop;
            },
        });
    },
    //执行函数
    exec(exec) {
        for (let key in exec) {
            exec[key].bind(this)();
        }
    },
    render(componment) {
        let script = SageRuntime.regGeneratorScript(componment);
        let css = "<style type='text/css' scoped>" + SageRuntime.regGeneratorCss(componment) + "</style>";
        let html = SageRuntime.regGeneratorHtml(componment);
        let outSide = SageRuntime.regGeneratorOutside(componment);
        console.log(outSide);
        let content = css + html;
        return {
            script,
            content
        };
    },



    //翻译插值表达式
    regGeneratorScript: (componment) => {
        let Script = null;
        let reg = /<script.*?>([\s\S]+?)<\/script>/g;
        componment.replace(reg, (a, b) => {    //正则匹配出script中的内容
            let code = b.replace(/export default\s+/, 'return ');
            Script = (new Function(code))();
        });
        return Script;
    },
    regGeneratorHtml: (componment) => {
        let Html = null;
        let reg = /<mar.*?>([\s\S]+?)<\/mar>/g;
        componment.replace(reg, (a, b) => {    //正则匹配出Html中的内容
            Html = b;
        });
        return Html;
    },
    regGeneratorCss: (componment) => {
        let Css = null;
        let reg = /<style.*?>([\s\S]+?)<\/style>/g;
        componment.replace(reg, (a, b) => {    //正则匹配出Css中的内容
            Css = b;
        });
        return Css;
    },
    regGeneratorOutside: (componment) => {
        let Outside = null;
        let reg = /<outSide.*?>([\s\S]+?)<\/outSide>/g;
        componment.replace(reg, (a, b) => {    //正则匹配出Outside中的内容
            Outside = b;
        });
        return Outside;
    },
    SEngine(script) {
        return eval(script);
    },
}


export default SageRuntime;