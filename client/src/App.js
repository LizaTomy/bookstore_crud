import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';
import AddBook from './components/pages/AddBook';
import UpdateBook from './components/pages/UpdateBook';
import Dashboard from './components/pages/Dashboard';
import GetBooks from './components/pages/GetBooks';
import GetBook from './components/pages/GetBook';
import {Provider} from 'react-redux';
import { store} from './redux/store';



function App() {




  return (
    <>
       <Provider store={store}>
        <Router>

         <Nav />
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/getbooks" element={<GetBooks />}/>
            <Route exact path="/admin" element={<Dashboard />}/>
            <Route exact path="/addbook" element={<AddBook />}/>
            <Route exact path="/books/:id" element={<UpdateBook />}/>
            <Route exact path="/getBook/:id" element={<GetBook />}/>
            
           

            

         </Routes>


        </Router>
        </Provider>
    
    
    </>
  );
}

export default App;