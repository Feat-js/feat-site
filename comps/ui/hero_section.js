module.exports = {
    name: "HeroMain",
    FeatAttributesSupport: true,
    description: "Main hero with title etc.",
    selfClosing: false,
    attributes: [
        {
            name: "subtitle",
            type: "string",
            description: "Subtitle of the Hero",
            required: false
        },
        {
            name: "id",
            type: "string",
            description: "The id of the container",
            required: false
        }
    ],
    code: (attributes, content, data, registerComponent) => {
        /*
        Src: ""
        */

        let attr = [];
        if (attributes.id) attr.push(`id="${attributes.id}"`);

        return `
            <div class="container mt-4" ${attr.join(" ")}>
                <div class="text-center">

                </div>

                <h1>
                    <img src="https://github.com/Feat-js/assets/blob/main/feat.js-icon_flat.png?raw=true" width="70" height="70"/>
                    <strong>Feat</strong>.js
                </h1>
                <p>${attributes.subtitle ? attributes.subtitle : "The Feat.JS Framework; Easy, powerful and fast."}</p>

                <a href="/gh" class="mdc-button mdc-button--outlined">
                    <span class="mdc-button__ripple"></span>
                    <span class="mdc-button__label"><i class="fab fa-github"></i> Github</span>
                </a>

                <a href="//npmjs.org/package/feat.js" class="mdc-button mdc-button--outlined">
                    <span class="mdc-button__ripple"></span>
                    <span class="mdc-button__label"><i class="fab fa-npm"></i> NPM</span>
                </a>

                <a href="/search" class="mdc-fab mdc-fab--extended fixed">
                    <div class="mdc-fab__ripple"></div>
                    <span class="material-icons mdc-fab__icon">search</span>
                    <span class="mdc-fab__label">Search</span>
                </a>
                <hr/>
                ${content}
            </div>
        `;

    }
} 