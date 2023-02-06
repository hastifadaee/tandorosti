import {Route, Routes} from "react-router-dom";
import Login from "./pages/login";

const App = ()=>{
    return(
        <Routes>
            <Route element={<Login/>} path={'/login'}/>
        </Routes>
    )
}
export default App ;