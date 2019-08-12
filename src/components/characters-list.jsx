import React, { useState, useEffect } from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import * as api from '../services/bb-api'
import CharacterCard from './character-card'

export default function CharactersList() {
  const { loading, data } = useCharactersList()

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h1">
          Characters
        </Typography>

        <Box mt={2}>
          {loading && <div>Loading...</div>}
          {data.map((character) => (
            <CharacterCard key={character.char_id} my={2} {...character} />
          ))}
        </Box>
      </Box>
    </Paper>
  )
}

function useCharactersList() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    api.getCharacters().then((characters) => {
      setData(characters)
      setLoading(false)
    })
  }, [])

  return {
    loading,
    data,
  }
}
