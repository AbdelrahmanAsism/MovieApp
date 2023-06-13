export default function Rating(props) {
  const circularProgressStyle = {
    background: `conic-gradient(#43e82a ${
      props.movie.vote_average * 3.6 * 10
    }deg, #ededed 0deg)`,
  };

  return (
    <div className=" position-absolute top-0 end-0">
      <div className="circular-progress" style={circularProgressStyle}>
        <span className="progress-value">{props.movie.vote_average}</span>
      </div>
    </div>
  );
}
