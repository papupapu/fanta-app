/* eslint-disable react/prop-types */
import React, {createContext, useContext} from 'react';
import Select from './selector';
import Reduce from './reducer';

export const GlobalContext = createContext();

export const useCtxGlobal = () => useContext(GlobalContext);

export class GlobalStateProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = props.initialState;
  }

  selector = type => Select(this.state, type);

  dispatch = async (type, payload) => {
    const newState = await Reduce(this.state, {type, payload});
    this.setState(newState);
  };

  render() {
    const {state, props} = this;
    const {children} = props;
    return (
      <GlobalContext.Provider
        value={{
          state,
          dispatch: this.dispatch,
          selector: this.selector,
        }}>
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
