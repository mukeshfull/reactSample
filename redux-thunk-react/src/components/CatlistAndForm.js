import React, {Component} from 'react';
import ShowCats from './ShowCats';
import CatForm from './CatForm';

class CatlistAndForm extends Component{
    render(){
        return (
            <div>
              
                <div className="row mt-5">
                    <div className="col-md-4 offset-md-1">
                        <h2>Cats</h2>
                        <ShowCats />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <h2>Add a new article</h2>
                        <CatForm />
                    </div>
                </div>
            </div>
            
        )
    }
}
export default CatlistAndForm;