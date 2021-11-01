import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const AlbumDetails = () => {
  const [album, setAlbum] = useState([])

  const { albumId } = useParams()

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.album[0])
        setAlbum(data.album[0])
      })
  }, [albumId])
  return (
    <div>
      <h2>Album: {album.strAlbum}</h2>
      <h2>By: {album.strArtist}</h2>
      <p>{album.strDescriptionEN}</p>
    </div>
  )
}
