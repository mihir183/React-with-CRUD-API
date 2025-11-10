import { FourSquare } from "react-loading-indicators"
const Loading = () => {
  return (
    <>
      <div className="col-lg-2 m-auto mt-5 p-5">
        <h3>

        <FourSquare color="#1e769a" speedPlus={3} size="large" text="fetch products" textColor="#000000" />
        </h3>
      </div>
    </>
  )
}

export default Loading
