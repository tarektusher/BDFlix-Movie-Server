import Route from "./routes/route";
import MovieContextProvider from "./context/MovieContextProvider";
function App() {
  return (
    <MovieContextProvider>
      <div className="App">
        <Route />
      </div>
    </MovieContextProvider>
  );
}

export default App;
