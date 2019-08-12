import React from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import CharacterCard from './character-card'

export default function CharactersList() {
  const { data } = useCharactersList()

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h1">
          Characters
        </Typography>

        <Box mt={2}>
          {data.map((character) => (
            <CharacterCard key={character.char_id} my={2} {...character} />
          ))}
        </Box>
      </Box>
    </Paper>
  )
}

function useCharactersList() {
  const data = [
    {
      char_id: 1,
      name: 'Walter White',
      birthday: '09-07-1958',
      occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
      img:
        'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
      status: 'Presumed dead',
      nickname: 'Heisenberg',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Bryan Cranston',
    },
    {
      char_id: 2,
      name: 'Jesse Pinkman',
      birthday: '09-24-1984',
      occupation: ['Meth Dealer'],
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg',
      status: 'Alive',
      nickname: "Cap n' Cook",
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Aaron Paul',
    },
    {
      char_id: 3,
      name: 'Skyler White',
      birthday: '08-11-1970',
      occupation: [
        'House wife',
        'Book Keeper',
        'Car Wash Manager',
        'Taxi Dispatcher',
      ],
      img:
        'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
      status: 'Alive',
      nickname: 'Sky',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Anna Gunn',
    },
    {
      char_id: 4,
      name: 'Walter White Jr.',
      birthday: '07-08-1993',
      occupation: ['Teenager'],
      img:
        'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg',
      status: 'Alive',
      nickname: 'Flynn',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'RJ Mitte',
    },
    {
      char_id: 5,
      name: 'Henry Schrader',
      birthday: 'Unknown',
      occupation: ['DEA Agent'],
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg',
      status: 'Deceased',
      nickname: 'Hank',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Dean Norris',
    },
    {
      char_id: 6,
      name: 'Marie Schrader',
      birthday: 'Unknown',
      occupation: ['Housewife', 'Clepto'],
      img:
        'https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645',
      status: 'Alive',
      nickname: 'Marie',
      appearance: [1, 2, 3, 4, 5],
      portrayed: 'Betsy Brandt',
    },
  ]

  return {
    data,
  }
}
