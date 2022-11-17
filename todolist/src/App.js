
import React, { useCallback, useState} from "react";
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {                // ◆ List에서 받아옴
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: false,
    }
  ])

  // 값을 받아올 useState ◆ Form 에서 받아옴
  const [value, setValue] = useState("")

    // 할일 filter로 지우기
    // button onClick에서 클릭될때 받은 id와 현재 배열에있는 id 를 비교
    const handleClick = useCallback((id) => {                                  //배열에 있는 id
      setTodoData(todoData.filter(data => data.id !== id));
    },[todoData]) // todoData가 바뀔때만 

    
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
    setValue("") // 입력하고나서 칸 빈칸으로 만들어주는것!!
  };


  // 전부 삭제되는 함수
  const handleRemoveClick = () => {
    setTodoData([])
  }

    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할일 목록</h1>
            <button onClick={handleRemoveClick}>전부삭제</button>
          </div>
          
          {/* 여기작성된 useState를 props로 넘겨줘서 List에서도 사용가능 */}
        <List todoData={todoData} setTodoData={setTodoData} handleClick={handleClick}/>

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        
        </div>
      </div>
    )
  }
export default App;
