import { AuthContextProvider } from './hooks/useAuth';
import { PaymentsContextProvider } from './hooks/usePayments';
import { ThemeContextProvider } from './hooks/useTheme';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectRoute from './components/RedirectRoute';
import { Provider as TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import ThankYou from './components/ThankYou';
import VerifyEmail from './components/VerifyEmail';
import ResetPassword from './components/ResetPassword';
import ResetPasswordMessage from './components/ResetPasswordMessage';
import Products from './components/Products';
import MainScreen from './components/MainScreen';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    
      <AuthContextProvider>
        <PaymentsContextProvider>
          <ThemeContextProvider>
            <TaskProvider>
                <div className="App">
                  <Header/>
                  <Routes>
                    <Route path="/signin" element={<RedirectRoute><SignIn/></RedirectRoute>} />
                    <Route path="/signup" element={<RedirectRoute><SignUp/></RedirectRoute>} />
                    <Route path="/reset" element={<ResetPassword/>} />
                    <Route path="/resetsent" element={<ResetPasswordMessage/>} />
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/thankyou" element={<RedirectRoute><ThankYou/></RedirectRoute>}/>
                    <Route path="/verifyemail" element={<RedirectRoute><VerifyEmail/></RedirectRoute>}/>
                    <Route path="/" element={<ProtectedRoute><MainScreen/></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
                  </Routes>
                  <Footer/>
                </div>
            </TaskProvider>
          </ThemeContextProvider>
        </PaymentsContextProvider>
      </AuthContextProvider>
      
  );
}

export default App;
