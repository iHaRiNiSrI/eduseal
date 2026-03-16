function Spinner() {

  return (
    <div style={spinnerContainer}>

      <div style={spinner}></div>

      <p>Loading...</p>

    </div>
  );

}

const spinnerContainer = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const spinner = {
  width: "40px",
  height: "40px",
  border: "4px solid #ddd",
  borderTop: "4px solid #2196F3",
  borderRadius: "50%",
  animation: "spin 1s linear infinite"
};

export default Spinner;