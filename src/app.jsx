import React from 'react';
import Listitem from './listitem';

export default ()=>{
    const tag = <div>굳이</div>;

    let items = [];
    for(let i =0;i <10; i +=1)
    items.push(<Listitem items={[i+1,"메뉴제목","가격"]}></Listitem>);
    
return <div>{...items}</div>
};