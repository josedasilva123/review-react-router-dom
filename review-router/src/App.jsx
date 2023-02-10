import DefaultTemplate from "./components/templates/DefaultTemplate";
import AppRoutes from "./routes/routes";

function App() {
   return (
      <div className="App">
         <DefaultTemplate>
            <AppRoutes />
         </DefaultTemplate>
      </div>
   );
}

export default App;
