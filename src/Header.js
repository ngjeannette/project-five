import React from "react";

const Header = props => {
  const styles = {
    color: props.color
  };
  return (
    <div className="header">
      <h1 style={styles}>{props.text}</h1>
    </div>
  );
};
export default Header;
