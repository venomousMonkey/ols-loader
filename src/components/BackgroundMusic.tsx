import React, { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady?: () => void
  }
}

const VIDEO_ID = 'PGNiXGX2nLU'

const BackgroundMusic: React.FC = () => {
  const playerRef = useRef<any>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setReady(true)
      return
    }

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      setReady(true)
    }

    return () => {
      delete window.onYouTubeIframeAPIReady
    }
  }, [])

  useEffect(() => {
    if (!ready || playerRef.current) return

    playerRef.current = new window.YT.Player('bg-music-player', {
      height: '0',
      width: '0',
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: VIDEO_ID,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        disablekb: 1
      },
      events: {
        onStateChange: (e: any) => {
          setPlaying(e.data === 1)
        }
      }
    })
  }, [ready])

  const handlePlay = () => {
    if (!playerRef.current) return
    try {
      playerRef.current.playVideo()
    } catch (e) {
      // ignore
    }
  }

  const handlePause = () => {
    if (!playerRef.current) return
    playerRef.current.pauseVideo()
  }

  useEffect(() => {
    const t = setTimeout(() => {
      const btn = buttonRef.current
      if (btn) {
        const ev = new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
        btn.dispatchEvent(ev)
      } else if (playerRef.current && ready) {
        try { playerRef.current.playVideo() } catch (e) { }
      }
    }, 800)

    return () => clearTimeout(t)
  }, [ready])

  return (
    <div aria-hidden="false">
      <div
        id="bg-music-player"
        style={{ width: 0, height: 0, overflow: 'hidden', position: 'absolute' }}
      />

      <button
        ref={buttonRef}
        onClick={() => (playing ? handlePause() : handlePlay())}
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 999,
          padding: '8px 12px',
          borderRadius: 8,
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-pressed={playing}
      >
        {playing ? 'Pause music' : 'Play music'}
      </button>
    </div>
  )
}

export default BackgroundMusic
