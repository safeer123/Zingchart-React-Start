import React from 'react';
import ReactDOM from 'react-dom';
import zingchart from 'zingchart';
import './index.css';
  class Zingchart extends React.Component {
    render() {
      return (
        <div id={this.props.id}></div>
      );
    }
    componentDidMount() {
        zingchart.click = function(p) {
            alert('click');
          }
        
        zingchart.render({
            id : this.props.id,
            width: (this.props.width || 600),
            height: (this.props.height || 400),
            data : this.props.data
        });
        setTimeout(function(){ 
            zingchart.exec('newChart', 'setseriesvalues', {
                plotindex : 0,
                values : [1,1,1,1,1,1,1,1]
            });
         }, 3000);
    }
  }
  var myConfig = {
    "graphset": [{
        "type" : "bar",
        "series":  [{
            "values" : [35,42,67,89,25,34,67,85]
        }]
    }]
};
    // ========================================
  
  ReactDOM.render(
    <Zingchart id="newChart" height="500" width="400" data={myConfig} />,
    document.getElementById('chart-1')
  );