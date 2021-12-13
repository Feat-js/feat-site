class GH_markdown {
    constructor(path, elementSelector){
        this.path = `https://raw.githubusercontent.com/Feat-js/feat/main` + path;
        this.elementSelector = elementSelector;
        this.conv = new showdown.Converter()
    }

    get(){
        fetch(this.path)
            .then(r=>r.text())
            .then(d=>{
                const el = Feat.getElement(this.elementSelector);
                el.innerHTML = this.conv.makeHtml(d);
                //? If ready
                hljs.highlightAll()
            })
    }
}