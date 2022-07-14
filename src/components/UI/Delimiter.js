const Delimiter = ({ width }) => {
  return (
    <div className="delimiter">
      <div className="delimiter__line" style={{ width: `${width}%` }} />
    </div>
  );
};

export default Delimiter;
