import React from 'react';

export default (props)=>{

    let item = [...props.items];
    item = item.map(v=><span>{v}</span>)
    return <li>{...item}</li>
}