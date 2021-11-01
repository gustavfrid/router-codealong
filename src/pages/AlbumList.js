import React, { useState, useEffect } from 'react'

export const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay')
      .then(res => res.json())
      .then(data => {
        setAlbums(data.artists)
      })
  }, [])
  return <div>Albumlist</div>
}
