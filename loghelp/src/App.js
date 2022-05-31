import React from 'react';
import {handleSubmit} from "./HandleSubmit";

// The technical PARENT COMPONENT of all other components in a React app.
function App() {
    return (
      <div>
          <form className={"grid_layout"} onSubmit={this.handleSubmit}>
              <p className={"heading"}>Welcome to your web-app log helper tool!</p>
              <p className={"appDescription"}>LogHelper is designed to assist in the sharing and anonymization of log data using
                  an automated process for replacing names, IP addresses, Mac addresses, and other
                  sensitive data for the exchange of said data during troubleshooting and case
                  management.</p>
              <div className={"center"}>
                  <label>Enter your path and search strings here:<br/><br/>
                      <input type="text" value={this.state.user.fpath} onChange={this.handleChange.bind(this)} placeholder="file path"/>
                      <input type="text" value={this.state.user.searchStrings} onChange={this.handleChange.bind(this)} placeholder="search strings" />
                      <button value={this.state.user.status} onClick={this.handleSubmit.bind(this)}>{'Search'}</button>
                  </label>
                  <br/>
                  <p>Anonymize results?</p>
                  <input type="radio" value={this.state.user.anonymize} id="yes"
                         onChange={this.handleChange.bind(this)} name="anonymize?"/> <label htmlFor="yes">Yes</label>

                  <input type="radio" value={this.state.user.anonymize} id="no"
                         onChange={this.handleChange.bind(this)} name="anonymize?"/> <label htmlFor="No">No</label>
              </div>
          </form>

      </div>
  );
}

export default App;
