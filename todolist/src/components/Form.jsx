const Form = ({value, setValue, handleSubmit}) => {

      // input값 받아오고작성
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const inputStyle = {
      flex : "10",
      padding: "5px",
      border:"none", 
      borderBottom:"1px solid purple"
    }
    
    return (  
        <div>
            {/* 할일 작성                        ◆ App 에서 받아옴 */}                       
          <form style={{display:"flex", marginTop:"20px"}} onSubmit={handleSubmit}>
            <input type="text" name="value" style={inputStyle} 
            placeholder="해야 할 일을 입력하세요" value={value} onChange={handleChange}/>

            <input type="submit" value="입력" className='btn' style={{flex : "1"}}/>
          </form>
        </div>
    );
}
 
export default Form;