import Landing from "./pages/Landing/landing";

const App=()=>{
  console.log(process.env.REACT_APP_MAP_API_KEY)

  return(
    <>
    <Landing/>
    </>
  )
}
export default App;
