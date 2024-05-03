import { Triangle } from "react-loader-spinner"
import css from "./Loader.module.css"
const Loader = () => {
  return (
<div className={css.loader}>
    <Triangle
  visible={true}
  height="80"
  width="80"
  color=" #d3c7ed"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
</div>
  )
}

export default Loader