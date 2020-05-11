import React from 'react';

export default function List(props) {
    const list = props.list;
    const listItems = list.map(item => {
        return(
            <li
                key={item.id}
                onClick={() => props.handlerClick(item.title)}>
                {item.title}
            </li>
        )
    });
    return <ul>{ listItems }</ul>
}
