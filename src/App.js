import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {addUser, removeUser, upUser, downUser} from './redux/actions/user'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = useSelector( state => state.userReducer);
  const [name, setName] = useState('')
  const dispatch = useDispatch();
  const onClickSubmit = (nameUser) => {
    if(!name){
      alert('Dữ liệu không được rỗng');
      return
    }
    dispatch(addUser(nameUser));
    setName('')
  }
  const onClickDelete = (id) => {
    console.log(id)
    dispatch(removeUser(id));
  }
  return (
    <div className="container" style={{marginTop:"2%"}}>
      <div className="card center">
        <div className="card-body">
          
          <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter name..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="button" onClick={ () => onClickSubmit(name)}>Add</button>
          </div>
          <hr></hr>
          {user.map((item,index) => (
            <div className="row" key={item.id}>
              <div className="col-8">
                <p>{item.nameUser}</p>
              </div>
              <div className="col-4" style={{textAlign: 'right'}}>
                <button type="button" className="btn btn-success" style={{marginRight:"1%"}} onClick = {() => dispatch(upUser(index))} disabled={index === 0} >Up</button>
                <button type="button" className="btn btn-success" style={{marginRight:"1%"}} onClick = {() => dispatch(downUser(index))} disabled={index === user.length - 1} >Down</button>
                <button type="button" className="btn btn-danger" style={{marginRight:"1%"}} onClick={ () => onClickDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
