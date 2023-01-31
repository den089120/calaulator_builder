import React, {FC} from 'react';
import './App.css';
import MyInput from "./UI/MyInput";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import MySelect from "./UI/MySelect";
import CommonJobs from "./components/CommonJobs";

function App() {
    const {squareApartment, isViewApartment} = useTypedSelector(state => state.calc)
    const {inputSquare, selectApartment} = useActions()

    function setSquare(e: { target: { value: number; }; }) {
        inputSquare(e.target.value)
    }
    function setSelectApart(e: {target: {value: string};}) {
        selectApartment(e.target.value)
    }

  return (
    <div className="App">
      <nav className="navbar bg-light">
        <form className="container-fluid">
          <MyInput label={"Введите площадь помещения"} placeHolder={"34"} typeInput={"number"} changeInput={setSquare}/>
        </form>
      </nav>
        {isViewApartment ? <MySelect selectInput={setSelectApart}/> : ''}
        <CommonJobs/>
    </div>
  );
}

export default App;
