import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import main from './Components/main';



const Router = () =>{
  
return(
<BrowserRouter>
      
        
        <Route exact path="/" component={main}></Route>
      

        

</BrowserRouter>

)

}

export default Router;