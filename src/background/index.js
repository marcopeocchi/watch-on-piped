const ID = 'watch-on-piped'

const getLocation = () => {
  const { pathname, search } = window.location
  return `https://piped.video${pathname}${search}`
}

const run = () => {
  const [owner] = document.getElementsByClassName('item style-scope ytd-watch-metadata')

  const piped = document.createElement('a')

  piped.id = ID
  piped.style.padding = '11px'
  piped.style.margin = '0px 10px'
  piped.style.textDecoration = 'none'
  piped.style.fontWeight = 500
  piped.style.fontSize = '10pt'
  piped.style.borderRadius = '100px'
  piped.style.backgroundColor = 'black'
  piped.style.color = 'white'

  piped.rel = 'noopener noreferrer'
  piped.href = getLocation()
  piped.target = '_blank'

  piped.text = 'Watch on piped'

  owner.appendChild(piped)
}

const observe = () => {
  let oldHref = document.location.href
  const body = document.querySelector('body')

  const observer = new MutationObserver(() => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href
      const e = document.getElementById(ID)
      if (e) {
        e.href = getLocation()
        return
      }
      run()
    }
  })

  observer.observe(body, { childList: true, subtree: true })
}

document.body.onload = () => setTimeout(observe, 250)