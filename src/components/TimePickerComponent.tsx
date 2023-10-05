import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import dayjs from 'dayjs';
//value={dayjs('2022-04-17T15:30')}

type Props = {
  handleValue(newValue:string | null): void,
  name: string,
  value: string,
  disabled: boolean
  }

export const TimePickerComponent = ({ handleValue, value, disabled }:Props) => {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          onChange={(newValue) => {    
            handleValue(newValue)
          }}
          value={value}
          disabled= {disabled}
        />
      </LocalizationProvider>
    </>
  )
}