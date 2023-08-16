import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useDatePickerComponent } from '../hooks/useDatePickerComponent';


export const DatePickerComponent = ({ handleValue }) => {

  const { handleOnChange } = useDatePickerComponent();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker          
          onChange={(newValue)=>{
            handleValue(handleOnChange(newValue));
          }}
        />
      </LocalizationProvider>
    </>
  )
}
