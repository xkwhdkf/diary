import { useState } from "react"

const DiaryEditor = () => {

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(state);
    alert("save");
  }

  return (
    <div className="DiaryEditor">
      <h2>To Day</h2>
      <div>
        <input 
          value={state.author}
          onChange={handleChangeState}
          name="author"
          placeholder="작성자"
          type="text"
          />
      </div>
      <div>
        <textarea 
          value={state.content} 
          onChange={handleChangeState}
          name="content"
          placeholder="Diary"
          type="text"
          />
      </div>
      <div>
        <span>Today's emotional score: </span>
        <select 
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Saving a Diary</button>
      </div>
    </div>
  )
}

export default DiaryEditor