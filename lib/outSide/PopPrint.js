class PopPrint {
    constructor(el, printTxt) {
        this.el = el;
        this.printTxt = printTxt;
        this.txt = '';
        this.time = 200;
        this.printAll = false;

        this.tick();
    }

    tick() {
        if (!this.printAll) {
            this.txt = this.printTxt.substring(0, this.txt.length + 1);
        } else {
            this.txt = this.printTxt.substring(0, this.txt.length - 1);
        }
        this.el.innerHTML = this.txt;

        if (this.printTxt === this.txt) {
            this.printAll = true;
        }

        if (this.txt === '' && this.printAll) {
            this.printAll = false;
        }
        setTimeout(() => {
            this.tick();
        }, this.time);
    }
}


export default PopPrint;