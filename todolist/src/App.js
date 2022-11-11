import logo from './logo.svg';
import React, {Component, useState} from "react";
import './App.css';

function App() {
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: false,
    }
  ])

  // 값을 받아올 useState
  const [value, setValue] = useState("")
  

  const btnStyle = {
    color: "#fff",
    border:"none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // 함수형 스타일 생성
  const getStyle = (completed) => {
    return{
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? ("line-through") : ("none") //true면 밑줄 false면 원본
    }
  }

  

  // 할일 filter로 지우기
  // button onClick에서 클릭될때 받은 id와 현재 배열에있는 id 를 비교
  const handleClick = (id) => {                                  //배열에 있는 id
    setTodoData(todoData.filter(data => data.id !== id));
  }

  // input값 받아오고작성
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  // 할일 추가
  const handleSubmit = (e) => {
    // Submit 새로고침 막아줌 (섭밋사용시 필수)
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id : Date.now(), // 아이디는 유니크값이여야해서 현재의 데이터 나열해줌
      title: value, // 작성값
      completed: false, // 할일완료 안되있어야하니 false를 기본으로 줌
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기         
                      // 기존값유지 // 할일추가       
    // ... 지정 안해주면 앞에있던값들이 새로고침되면서 바뀜            
    setTodoData((prev)=> [...prev, newTodo]);
    setValue("")
  }

  // 체크시 밑줄
  const handleCompelteChane = (id) =>{
    let newTodoData = todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }


    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할일 목록</h1>
          </div>
          {/* 할일 목록 나열 / data안에 todoData 배열들 들어감*/}
          {todoData.map((data)=>(
          <div style={getStyle(data.completed)} key={data.id}>     
            <input type="checkbox" defaultChecked={false} onChange={()=> handleCompelteChane(data.id)}/>
            {data.title}
            <button style={btnStyle} onClick={()=>handleClick(data.id)}>X</button>
          </div>
          ))}
          {/* 할일 작성 */}
          <form style={{display:"flex"}} onSubmit={handleSubmit}>
            <input type="text" 
            name="value" 
            style={{flex : "10", padding: "5px"}} 
            placeholder="해야 할 일을 입력하세요" 
            value={value}
            onChange={handleChange}/>

            <input type="submit"
            value="입력"
            className='btn'
            style={{flex : "1"}}
            />
          </form>
        </div>
      </div>
    )
  }

export default App;
