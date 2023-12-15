export default function Input({ className, onClick }) {
  return (
    <>
      <input
        type="text"
        className={className}
        onClick={(e) => onClick(e)}
        readOnly
      />
    </>
  );
}
