import './index.css';

export const Banner = ({ name }: { name?: string }) => {
  function getGreeting(): string {
    const currentHour = new Date().getHours();

    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
    } else if (currentHour >= 18 && currentHour < 22) {
      greeting = 'Good evening';
    } else {
      greeting = 'Good night';
    }

    if (!name) return greeting;

    return `${greeting}, ${name}`;
  }

  return (
    <div className="banner">
      <img
        src="https://picsum.photos/200/300?random=1"
        alt="profile"
        className="profile-img"
      />
      <div>
        <div className="body2">Welcome to e-commerce!</div>
        <div className="body1 bold">{getGreeting()}</div>
      </div>
    </div>
  );
};
