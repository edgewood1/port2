import React from "react";

export const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    side: false,
    top: false
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          slideTop: () => {
            this.setState({ top: !this.state.top });
          },
          slideSide: () => {
            this.setState({ side: !this.state.side });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
