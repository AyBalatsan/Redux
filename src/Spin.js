import Loader from "react-loader-spinner";

const Spin = (props) =>{
  return (
    <div className="loader-styles">
      <Loader
        type="TailSpin"
        height="100"
        width="100"
        color='grey'
        visible = {false}
     />
    </div>
  )
} 
export default Spin