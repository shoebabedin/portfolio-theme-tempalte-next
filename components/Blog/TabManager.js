import PropTypes from "prop-types";
import React, { Component } from "react";

export class TabManager extends Component {
  state = {};

  render() {
    const { activeTab, handleTab, tabs } = this.props;

    
    return (
      <div className="tab-manager">
        {[
              "All Projects",
              "Development",
              "Website Design",
              "Mobile App Design"
            ]?.map(({ title, index }) => (
          <div key={index} className={`tab ${title === activeTab ? "selected-tab" : ""}`}
            onClick={() => {
              handleTab(title);
            }}
          >
            {/* {label} */}
          </div>
        ))}
      </div>
    );
  }
}

TabManager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(Object).isRequired
};
