import React, { FC } from "react"

const Represent: FC = ():JSX.Element=>{
    return(
        <div>
            <p><b>Lists of Bees</b></p>
            <table
                title="This is present table for bees" 
                className='an-table'
            >
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>speed</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>elevation</th>
                        <th>fuel</th>
                        <th>damage</th>
                        <th>nectar</th>
                        <th>honey</th>
                        <th>tansformationRate</th>
                        <th>action</th>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>6.6</td>
                        <td>55.7</td>
                        <td>32.7</td>
                        <td>89.7</td>
                        <td>79</td>
                        <td>68</td>
                        <td>50</td>
                        <td>26</td>
                        <td>0.52</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>6.6</td>
                        <td>55.7</td>
                        <td>32.7</td>
                        <td>89.7</td>
                        <td>79</td>
                        <td>68</td>
                        <td>50</td>
                        <td>26</td>
                        <td>0.52</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
export default Represent;
