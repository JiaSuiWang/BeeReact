import React, { FC } from "react"

const Query: FC = ():JSX.Element=>{
    return(
        <div>
            <p><b>Search</b></p>
            <form action="">
                <label htmlFor="">Fuel({'<'}%)</label>
                <input type="text"/>
            </form>
            <form action="">
                <label htmlFor="">Damage({'>'}%)</label>
                <input type="text"/>
            </form>
            <button>search</button>
            <button>reset</button>
            <button>add</button>
        </div>
    )
}
export default Query;
