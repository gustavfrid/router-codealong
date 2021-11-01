import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://theaudiodb.com/api/v1/json/1/album.php?i=112024')
      .then(res => res.json())
      .then(data => {
        console.log(data.album)
        setAlbums(data.album)
      })
  }, [])
  return (
    <>
      <h1>The Weekends</h1>
      <div style={{ width: '800px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {albums.map(album => (
          <div key={album.idAlbum}>
            <img src={album.strAlbumThumb} alt={album.strAlbum} style={{ width: '250px' }} />
            <Link to={`/albums/${album.idAlbum}`}>
              <h3>{album.strAlbum}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
