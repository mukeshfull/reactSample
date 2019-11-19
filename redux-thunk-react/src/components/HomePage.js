import React, { Component} from 'react';
import ShowCats from './ShowCats';

class HomePage extends Component{
    render(){
        return (
            <div>This is home page ! This application demostrate following
                <ul>
                    <li>Redux</li>
                    <li>Thunk</li>
                    <li>router</li>
                </ul>
                <ShowCats />
            </div>
        )
    }
}
export default HomePage;