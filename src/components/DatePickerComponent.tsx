import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';

type Props = {
handleValue(newValue:any): void | undefined,
name?: string,
value?: any,
disabled?: boolean
}

export const DatePickerComponent = ({ handleValue, value, disabled }:Props) => {


  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker          
          onChange={(newValue)=>{
            handleValue(newValue);
          }}
          value={value}
          disabled={disabled}
          
        />
      </LocalizationProvider>
    </>
  )
}


