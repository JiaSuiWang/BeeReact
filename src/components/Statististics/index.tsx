import React, { FC, CSSProperties, useState } from "react"
import { useEffect } from "react";
import { isConstructorDeclaration } from "typescript";
import styles from './index.module.css'; 
//把整个css文件引入过来，当作一个style（相当于dom）        import "./index.css"
{/* JS中的import 代替了HTML中的<link rel="stylesheet" href="styles.css"></link> */}

//因为import './index.css'会导致全局样式的样式冲突问题，为了避免，所以使用module.css
//原理：为每一个css都创建一个随机字符串来保证class的唯一性


//1.在一个element下面，
    // 每一个attribute都占用一个代码块，
    // =左右两边不需要空格，
    // attributes之间不需要逗号

/**2.REACT JS中CSS的写法用两个大括号来写
 * 子的attribute每个占用一行
 * key: value的形式，左边有空格，右边有空格
 * 子的attributes之间用逗号
 */


// let nectar:number = 100;
// let honey:number = 100;
// let amountBee:number = 9;
// let amountFuelOverSixty = 4;
// let amountStateOverSixty = 3;




const Statistics: FC = (): JSX.Element => {
    const [nectar, setNectar] = useState<number>(100)
    const [honey, setHoney] = useState<number>(100)
    const [amountBee, setAmountBee] = useState<number>(9)
    const [amountFuelOverSixty, setAmountFuelOverSixty] = useState<number>(4)
    const [amountStateOverSixty, setAmountStateOverSixty] = useState<number>(3)

    //evenlistner (本质是一个callback函数)
    const runStatisticeAPI = () =>{
        console.log("hello world")
    }
    useEffect(runStatisticeAPI, [])//如果这个地方不传入参数的话，相当于页面初始化的时候执行，且仅执行一次

    return (
        //JSX Element里面声明变量必须用一层大括号给包裹起来，对于object，Ts的语法依然是一层大括号，里面的元素用逗号分隔
        <div>
            <p><b>Statistics</b></p>
            <ul>
                {/* 1.这个地方需要传入一个函数的reference，而不是函数的调用
                2.如果写成setNectar(Math.random())，相当于调用了这个函数
                3.把这个函数调用再次封装到一个函数里面，就能解决这个问题 */}
                <button onClick={() => setNectar(Math.random())}>点击</button>
                <li>共收集蜂蜜, nectar = {nectar}</li>
                <li>共生产蜂蜜, honey = {honey}</li>
                <li>总转化率,tansformation = {honey / nectar}</li>
                <li>蜜蜂数量,amountBee = {amountBee}</li>
                <li>燃料大于60%, amountFuelOverSixty = {amountFuelOverSixty}</li>
                <li>状态大于60%, amountStateOverSixty = {amountStateOverSixty}</li>
            </ul>

        </div>
    )
}
export default Statistics;