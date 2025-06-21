const Welcome = (props) => {
  return (
    <div>
      <h2>Welcome {props.name}!</h2>
      <p>Country: {props.country}</p>
    </div>
  );
};

export default Welcome;
