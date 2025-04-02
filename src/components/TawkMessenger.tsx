'use client'

import { useEffect } from 'react'

const TawkMessenger = () => {
  useEffect(() => {
    // Create Tawk_API if it doesn't exist
    var Tawk_API = window.Tawk_API || {}
    var Tawk_LoadStart = new Date()

    // Create and inject the script
    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]
    
    s1.async = true
    s1.src = 'https://embed.tawk.to/67ed9234058ee4190e971869/1ins067r7'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    
    if (s0?.parentNode) {
      s0.parentNode.insertBefore(s1, s0)
    } else {
      document.head.appendChild(s1)
    }
  }, [])

  return null
}

export default TawkMessenger

