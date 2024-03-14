const Button = props => {
  //  Write your code here.
  {color,content}=props
  return(
      <button className={`button ${color}`}>{content}</button>
  );
}

const element = (
  //  Write your code here.
  <div className="bg-container">
      <div>
          <h1 className="hdng">Social Buttons</h1>
          <div className="btn-container">
            <Button color="yellow" content="Like"></Button>
            <Button color="white" content="Comment"></Button>
            <Button color="blue" content="Share "></Button>
          </div>
      </div>
  </div>

)

ReactDOM.render(element, document.getElementById('root'))
