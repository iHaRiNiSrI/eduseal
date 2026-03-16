function ConfirmModal({ message, onConfirm, onCancel }) {

  return (
    <div style={modalWrapper}>

      <div style={modalStyle}>

        <h3 style={{marginBottom:"10px"}}>Confirm Action</h3>

        <p style={{marginBottom:"20px"}}>{message}</p>

        <div style={buttonRow}>

          <button style={confirmButton} onClick={onConfirm}>
            Yes, Continue
          </button>

          <button style={cancelButton} onClick={onCancel}>
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}

/* CENTERED BESIDE SETTINGS MODAL */

const modalWrapper = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-120%, -50%)", 
  zIndex: 200
};

/* GLASS STYLE */

const modalStyle = {
  width: "300px",
  padding: "22px",
  borderRadius: "16px",

  background: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",

  border: "1px solid rgba(255,255,255,0.25)",

  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",

  color: "white",
  textAlign: "center"
};

const buttonRow = {
  display: "flex",
  justifyContent: "center",
  gap: "10px"
};

const confirmButton = {
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  background: "#22c55e",
  color: "white",
  cursor: "pointer"
};

const cancelButton = {
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  background: "#ef4444",
  color: "white",
  cursor: "pointer"
};

export default ConfirmModal;