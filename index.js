const Notification = (props) => {
  const { className, iconUrl, message } = props;
  const eachContainer = `notification-container ${className}`;
  return (
    <div className={eachContainer}>
      <img className="img-sty" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="bg-main-container">
    <h1 className="heading">Notification</h1>
    <div className="notification-list-container">
      <Notification
        className="bg-blue"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="bg-green"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="bg-yellow"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="bg-red"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
