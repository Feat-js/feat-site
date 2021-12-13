const Express = require('express');
const app = new Express();
const FeatJS = require('feat.js');
const feat = new FeatJS(app);
const config = require('./config.json');

app.use(Express.static('public'));
let pages = ["docs", "frontend", "support"];



app.get('/', (req, res) => {
    return res.render('/views/index', { 
        inner: `views/inner/index.html`,
        is_search: false
    });
});

app.get('/search', (req, res) => {
    let q = req.query.q;

    let result = [];
    if(!q) result = pages;

    if(q) result = pages.filter(s => s.includes(q.toString()));

    return res.render('/views/index', { 
        inner: `views/inner/index.html`,
        is_search: true,
        pages: result,
        query: q ? q : "",
        has_result: result.length > 0
    });
});

app.get('/gh', (req, res) => res.redirect('//github.com/feat-js/feat'));

app.get('/:id', (req, res) => {
    if(!pages.includes(req.params.id)) return res.render('/views/index', { 
        inner: `views/inner/error.html`,
        type: '404',
        is_search: false
    });

    return res.render('/views/index', { 
        inner: `views/inner/${req.params.id}.html`,
        is_search: false
    });
});

app.listen(config["port"], () => console.log(`App online on port 3000`));