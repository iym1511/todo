import React, { useState } from "react";

// React.memo 랜더링 최적화
const ListMain = React.memo(({id, title, completed, todoData, setTodoData, provided, handleClick}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title)


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

    // input에 수정한 값 받음
    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    }

    // 수정한값 저장
    const handleSubmit = (e) => {
      e.preventDefault();
      let newTodoData = todoData.map(data => {
        if(data.id === id) {
          data.title = editedTitle
        }
        return data;
      })
      setTodoData(newTodoData)
      setIsEditing(false)
    }

    const btnStyle2 = {
      background:"white",
      border:"none",
      width:"26px",
      height:"26px",
      borderRadius: "50%",
      cursor:"pointer",
      float: "right",
      marginTop:"10px",
      fontSize:"18px"
    }
    const Editing2 = {
      float: "right",
      color: "gray",
      marginRight: "10px",
      border:"none",
      background:"white",
      marginBottom:"3px",
      cursor:"pointer"
    }

    // 메모 수정
    if(isEditing) {
      return(
        <div>
              <div style={{border:"3px solid purple",borderRadius:"10px",margin:"10px auto",display:"flex",width:"98.6%",height:"46px" }}> 
                    <form onSubmit={handleSubmit}>
                      <input value={editedTitle} onChange={handleEditChange} className="edited" />
                    </form>
                    <button type="submit" style={Editing2} onClick={handleSubmit}>저장</button>
                    <button style={btnStyle2} onClick={()=> setIsEditing(false)}>x</button>
              </div>
          </div>  
      )
    }else{
        // 함수형 스타일 생성
        const getStyle = (completed) => {
            return{
              display:"inline-block",
              textDecoration: completed ? ("line-through") : ("none"), //true면 밑줄 false면 원본
              color: completed ? ("gray") : ("black")
            }
          }
          
        const inputStyle = {
          borderBottom:"1px solid purple",
        }

        const btnStyle = {
          color: "#fff",
          border:"none",
          width:"26px",
          height:"26px",
          borderRadius: "50%",
          cursor: "pointer",
          float: "right"
        }
        const Editing = {
          float: "right",
          color: "gray",
          marginRight: "10px",
          border:"none",
          background:"white",
          cursor:"pointer"
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
                        <button style={Editing} onClick={()=>setIsEditing(true)}>수정</button>
                    </div>
            </div>  
        </div>
    );
  }
});

export default ListMain;