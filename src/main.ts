import cssText from './dark.css?raw'

function addLink(url: string) {
    let dark = document.createElement('link')
    dark.rel = 'stylesheet'
    dark.href = url
    document.head.appendChild(dark)
}

addLink('https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/map.css')
addLink('https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css')


let style = document.createElement('style')
style.setAttribute('type', 'text/css')
style.innerHTML = cssText
document.body.append(style)
