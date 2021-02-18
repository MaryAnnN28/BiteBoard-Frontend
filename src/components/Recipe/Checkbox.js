import React, { Component } from 'react';

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = ({isChecked}) => {

    this.setState(({
        isChecked: !isChecked,
      }
    ));
  }

  render() {
    const { name } = this.props;
    const { isChecked } = this.state;

    return (
      <div >
          <input
                            type="checkbox"
                            value={name}
                            checked={isChecked}
                            onChange={this.toggleCheckboxChange}
            />
            <label> {name}</label>
            <br/>
      </div>
    );
  }
}

export default Checkbox;
