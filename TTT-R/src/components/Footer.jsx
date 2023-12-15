export default function Footer({ onReset }) {
  return (
    <div className="footer">
      <button className="resetBtn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
