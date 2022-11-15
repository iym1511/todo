const ListMain = ({id, title, completed, todoData, setTodoData, provided}) => {
    // 할일 filter로 지우기
      // button onClick에서 클릭될때 받은 id와 현재 배열에있는 id 를 비교
      const handleClick = (id) => {                                  //배열에 있는 id
        setTodoData(todoData.filter(data => data.id !== id));
    }

      // 체크시 밑줄
    const handleCompelteChange = (id) =>{
        let newTodoData = todoData.map(data => {
        if(data.id === id){
            data.completed = !data.completed;
        }
        return data;
        })
        setTodoData(newTodoData);
    }
        // 함수형 스타일 생성
        const getStyle = (completed) => {
            return{
              display:"inline-block",
              textDecoration: completed ? ("line-through") : ("none"), //true면 밑줄 false면 원본
              color: completed ? ("gray") : ("black")
            }
          }
          const btnStyle = {
            color: "#fff",
            border:"none",
            padding: "5px 9px",
            borderRadius: "50%",
            cursor: "pointer",
            float: "right"
          }
          
    
        const inputStyle = {
          borderBottom:"1px solid purple"
        }

    return (  
        <div>
            <div key={id}  {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>    
                    <div  style={{border:"3px solid purple",borderRadius:"10px", padding:"10px",margin:"10px auto",display:"inline-block",width:"95%" }}> 
                        <div style={getStyle(completed)}>
                            <input type="checkbox" style={inputStyle} defaultChecked={false} onChange={()=> handleCompelteChange(id)}/>
                            {title}
                        </div>
                        <button style={btnStyle} onClick={()=>handleClick(id)}>X</button>
                    </div>
            </div>  
        </div>
    );
}

export default ListMain;