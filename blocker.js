const defineCss = () => {
    return `<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: auto;
    }
    </style>`
}

const defineHtml = () => {
    return `<div class="content">
    <img src="https://media.tenor.com/eJ4YoJBXUQYAAAAd/brooklyn99-captainholt.gif">
    </div>`
}

const forbiddenUrls = ['www.facebook.com', 'www.instagram.com'];
const set = new Set(forbiddenUrls);

if(set.has(window.location.hostname)) {
    //replace HTML and CSS
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHtml();
}