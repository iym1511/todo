import { DragDropContext} from "react-beautiful-dnd";
import { Droppable} from "react-beautiful-dnd";
import { Draggable} from "react-beautiful-dnd";
import ListMain from "./ListMain";
import React from "react";

// React.memo 랜더링 최적화
const List = React.memo(({todoData, setTodoData, handleClick}) => {

      // drag drop 위치 바꿔주는 함수
      const handleEnd = (result) => {
        // 목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
        if(!result.destination) return;

        // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
        const newTodoData = [...todoData];

        // 1. 변경시키는 아이템을 배열에서 지워줍니다.
        // 2. return 값으로 지워진 아이템을 잡아줍니다.     / 하나를 지워준다
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        // 원하는 자리에 reorderedItem을 insert 해줍니다.
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
      }

    return (  
        <div>
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="todo">
                {(provided)=> ( 
                <div {...provided.droppableProps} ref={provided.innerRef}>
                {/* 할일 목록 나열 / data안에 todoData 배열들 들어감*/}
                {todoData.map((data, index)=>(
                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <ListMain key={data.id} id={data.id} title={data.title} completed={data.completed} todoData={todoData}
                      setTodoData={setTodoData} provided={provided} handleClick={handleClick}  // ListMain 으로 값 다 넘겨줌
                      />
                    )}
                </Draggable>
                ))}
                {provided.placeholder}  {/* 드래그 효과 */}
                </div>
            )}
            </Droppable>
        </DragDropContext>
        </div>
    );
});
 
export default List;

