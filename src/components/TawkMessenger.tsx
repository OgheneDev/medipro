'use client'

import { useEffect } from 'react'

const TawkMessenger = () => {
  useEffect(() => {
    var Tawk_API = window.Tawk_API || {}
    var Tawk_LoadStart = new Date()

    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]

    s1.async = true
    s1.src = 'https://embed.tawk.to/67ed636545ef861910feeb40/1inrkoi41'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')

    if (s0?.parentNode) {
      s0.parentNode.insertBefore(s1, s0)
    } else {
      document.head.appendChild(s1) // Fallback in case no script tags exist
    }
  }, [])

  return null
}

export default TawkMessenger

