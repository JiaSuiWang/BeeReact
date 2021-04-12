// 1.项目框架设计
// 2.写前端页面
// 3.写前端部件通信
// 4.写前端API
// 5.后端连接数据库
// 6.后端API
// 7.前后端连调（接口）

import React, {FC, useState} from "react";
import Represent from "./components/Represent"
import Query from "./components/Query"
import Statistics from "./components/Statististics"
import { IBeesProps } from "./interface/App";
import Test from "./components/Test";

/**路径两个重要的点：
 * 1.在node_nodule里面引入依赖不需要写路径
 * 2.用index命名的文件不需要写在引用路径里面
 */


const App: FC = ():JSX.Element => {
    //两个子组件的通信，状态提升
    //IBeesProps类型的数组，也就是说beesList里面的每一个元素，都是IBeesProps类型的
    const [beesLists, setBeesList] = useState<IBeesProps[]>([]);
    return (
        <div>
            <Statistics/>
            <Query 
                setBeesList={setBeesList} 
                // 这个不用看，只是为展示一下添加之后，表格内容
                beesList={beesLists}
            />
            {/* beesList是一个形参， beesLists是定义的一个变量，这是一个赋值的过程 */}
            <Represent beesList={beesLists}/> 
            <Test/>
        </div>
    )
}

export default App;


//0.如何在react的ts中定义变量和修改变量
//如果要触发页面视图更新必须使用useState接口

//1.如何从子组件向父组件进行通信
    //1.父组件需要有相应的参数进行接受，所以用useState接口进行定义参数和方法
    //2.在react中，使用状态提升，将所有的方法都定义到了父组件中，子组件只需要调用方法
/**
 * 在vue中，子 -> 父  $emit() ;    
 *  react 状态提升
 *
 */


//2.如何从父组件向子组件进行通信
    //1.在子组件中定义好接口，规定好要接受哪些参数
    //2.在父组件中，新建子组件的时候调用接口，传入子组件需要的值
    //3.在子组件中进行展示
