import "./styles.css";
import Maintenance from "./Maintenance";
export default function App() {
  const maintenance = true;
  return (
    <>
      {maintenance ? (
        <Maintenance />
      ) : (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      )}
    </>
  );
}
