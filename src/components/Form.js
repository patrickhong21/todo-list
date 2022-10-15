import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function Form({date, setDate, input, setInput}) {
  return (
    <div>
       <form>
       <label>Enter your task:
        <input
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
       </label>
       </form>
       
       <DatePicker
       selected={date}
       onChange={(date) => setDate(date)}
       timeInputLabel="Time:"
       dateFormat="MM/dd/yyyy h:mm aa"
       showTimeInput
       />
    </div>

  );
 }


export default Form;

