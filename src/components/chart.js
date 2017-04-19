import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  const data = props.data;
  const max = _.round(_.max(data), 1);
  const min = _.round(_.min(data), 1);
  return (
    <div>
      <Sparklines max={max} min={min} height={120} width={180} data={data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)} [{min}, {max}] {props.unit} </div>
    </div>
  );
}

