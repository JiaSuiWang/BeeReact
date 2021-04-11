import React, {FC} from "react";
import Represent from "./components/Represent"
import Query from "./components/Query"
import Statistics from "./components/Statististics"

/**路径两个重要的点：
 * 1.在node_nodule里面引入依赖不需要写路径
 * 2.用index命名的文件不需要写在引用路径里面
 */


const App: FC = ():JSX.Element => {
    return (
        <div>
            <Statistics/>
            <Query/>
            <Represent/>
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
