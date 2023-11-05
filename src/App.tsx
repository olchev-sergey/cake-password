import { useState } from 'react'
import './App.css'
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function App() {
  const [word, setWord] = useState('')
  const [sum, setSum] = useState(0)

  const [state, setState] = useState<'word' | 'password' | 'result'>('word')

  return (
    <div>
      {state === 'word' ? (
        <Stack spacing={2}>
          <Typography variant="h4">Введите кодовое слово:123</Typography>
          <TextField onChange={(e) => setWord(e.target.value)} value={word} />

          <Button
            variant="contained"
            onClick={() => {
              if (word.toLowerCase() === 'пирог') setState('password')
            }}
            id="1"
          >
            Подтвердить
          </Button>
        </Stack>
      ) : null}
      {state === 'password' ? (
        <Stack spacing={2}>
          <Typography variant="h4">Сумма</Typography>
          <TextField
            onChange={(e) => setSum(Number(e.target.value) || 0)}
            value={sum}
          />
          <Button
            id="2"
            onClick={() => {
              if (sum === 2059) setState('result')
            }}
            variant="contained"
          >
            Подтвердить
          </Button>
        </Stack>
      ) : null}
      {state === 'result' ? (
        <div>
          <Typography variant="subtitle1">
            Чтобы получить награду надо сделать следующее:{' '}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText>Поцеловать Сережу в щечку</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText>Сказать: "А ты хорош😏"</ListItemText>
            </ListItem>
          </List>
          {/* <Typography></Typography> */}
          {/* <Typography>Сказать: "А ты хорош😏"</Typography> */}
        </div>
      ) : null}
    </div>
  )
}

export default App
