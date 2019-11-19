import React, {Component} from 'react';
import CatList from './components/CatList';
import ItemList from './components/ItemList';

class App extends Component{
    render(){
        return(
            <div>
                <ItemList />
                <CatList />

            </div>
        )
    }
}
export default App;