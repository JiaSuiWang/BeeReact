/*
 * @Descripttion: 
 * @Author: xiao wang
 * @Date: 2021-04-12 17:51:35
 * @LastEditors: xiao wang
 * @LastEditTime: 2021-04-12 21:26:59
 * @FilePath: \react-typescript\src\components\Test\index.tsx
 */



import React, { FC, useEffect, useState } from 'react';


const Test: FC = (): JSX.Element => {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Test;


