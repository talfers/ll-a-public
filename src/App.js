import { AuthContextProvider } from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider as TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';
import MainScreen from './components/MainScreen';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    
      <AuthContextProvider>
        <TaskProvider>
            <div className="App">
              <Header/>
              <Routes>
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/" element={<ProtectedRoute><MainScreen/></ProtectedRoute>} />
              </Routes>
              <Footer/>
            </div>
        </TaskProvider>
      </AuthContextProvider>
    
  );
}

export default App;
