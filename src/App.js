import {useState} from 'react';
import { AuthContextProvider } from './hooks/useAuth';
import { PaymentsContextProvider } from './hooks/usePayments';
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/Theme";
import MainPage from './pages/MainPage';
import { Provider as TaskProvider } from './context/TaskContext';
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
                  <MainPage handleThemeChange={handleThemeChange} />
                </div>
              </ThemeProvider>
          </TaskProvider>
        </PaymentsContextProvider>
      </AuthContextProvider>
      
  );
}

export default App;