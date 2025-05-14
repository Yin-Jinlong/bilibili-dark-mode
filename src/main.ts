import cssText from './dark.css?raw'

const CDN = 'https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css'

async function getText(path: string): Promise<string> {
    const res = await fetch(`${CDN}/${path}`)
    return await res.text()
}

function addStyle(text: string) {
    let style = document.createElement('style')
    style.textContent = text
    document.body.appendChild(style)
}

getText('dark.css').then(addStyle)
getText('map.css').then(addStyle)

addStyle(cssText)
