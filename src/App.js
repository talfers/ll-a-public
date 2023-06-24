import { AuthContextProvider } from './hooks/useAuth';
import { PaymentsContextProvider } from './hooks/usePayments';
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/Theme";
import MainPage from './pages/MainPage';
import { Provider as TaskProvider } from './context/TaskContext';
import { GlobalStyles } from "./styles/Global";


function App() {
  return (
      <AuthContextProvider>
<<<<<<< HEAD
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
=======
        <PaymentsContextProvider>
          <ThemeContextProvider>
            <TaskProvider>
                <div className="App">
                  <GlobalStyles />
                  <MainPage handleThemeChange={handleThemeChange} />
                </div>
            </TaskProvider>
          </ThemeContextProvider>
        </PaymentsContextProvider>
>>>>>>> bb2c412bda6561f6ba185bcc4b7ad284e5bfd9cd
      </AuthContextProvider>
      
  );
}

export default App;
