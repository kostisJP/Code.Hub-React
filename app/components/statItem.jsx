import React from "react";
import {Badge,Panel,Col} from "react-bootstrap";
import '../statItem.css';

const StatItem = (props) => {
  return (
    <div>
      <Panel>
        <Panel.Body>
        {props.title}:<Badge>{props.count}</Badge>
        </Panel.Body>
        </Panel>
      
    </div>
  );
};
export default StatItem;