import './index.css';

export const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://picsum.photos/200/300?random=1"
        alt="profile"
        className="profile-img"
      />
      <div>
        <div className="body2">Welcome to e-commerce!</div>
        <div className="body1 bold">Good morning, Nicole</div>
      </div>
    </div>
  );
};
