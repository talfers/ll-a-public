import {useState} from 'react';
import { AuthContextProvider } from './hooks/useAuth';
import { PaymentsContextProvider } from './hooks/usePayments';
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/Theme";
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
import MainScreen from './components/MainScreen';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from "./styles/Global";


function App() {
  const [selectedTheme, setSelectedTheme] = useState(dark);

  const handleThemeChange = () => {
    setSelectedTheme(selectedTheme===light?dark:light);
  };

  return (
    
      <AuthContextProvider>
        <PaymentsContextProvider>
          <TaskProvider>  
            <ThemeProvider theme={selectedTheme}>           
                <div className="App">
                  <GlobalStyles />
                  <Header handleThemeChange={handleThemeChange} />
                  <Routes>
                    <Route path="/signin" element={<RedirectRoute><SignIn/></RedirectRoute>} />
                    <Route path="/signup" element={<RedirectRoute><SignUp/></RedirectRoute>} />
                    <Route path="/reset" element={<ResetPassword/>} />
                    <Route path="/resetsent" element={<ResetPasswordMessage/>} />
                    <Route path="/thankyou" element={<RedirectRoute><ThankYou/></RedirectRoute>}/>
                    <Route path="/verifyemail" element={<RedirectRoute><VerifyEmail/></RedirectRoute>}/>
                    <Route path="/" element={<ProtectedRoute><MainScreen handleThemeChange={handleThemeChange}/></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
                  </Routes>
                  <Footer/>  
                </div>
              </ThemeProvider>
          </TaskProvider>
        </PaymentsContextProvider>
      </AuthContextProvider>
      
  );
}

export default App;
