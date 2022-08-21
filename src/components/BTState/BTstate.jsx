import React, { Component } from 'react'
import "./style.css"
import data from "./dataGlasses.json"
export default class BTstate extends Component {

    state = {
        glass: {
            "id": 1,
            "price": "30 $",
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }

    render() {
        return (
            <div className=' bt-glass'>
                <img src="./img/test3.png" alt="" className='img1' />

                <header>
                    <p className='text-white text-center header'>TRY GLASS APP ONLINE</p>
                </header>

                <div className='row content'>

                    <div className='col-4 model'>
                        <img src="./img/model.jpg" alt="" />
                        <img src={this.state.glass.url} alt="" width={10} className='img2' />

                    </div>
                    <div className='info'>
                        <h3 className='pl-2'>{this.state.glass.name}</h3>
                        <button className="btn btn-danger ml-2 btn-glass">{this.state.glass.price}</button>
                        <p className='pl-2'>{this.state.glass.desc}</p>
                    </div>

                    <div className='try-glass row '>
                        {
                            data.map((value) => {
                                return <div className='glass' key={value.id}>
                                    <img src={value.url} alt="" width={140}  
                                    onClick={()=>{
                                        this.setState({
                                            glass : value
                                        })
                                    }}
                                    />
                                </div>
                            })
                        }



                    </div>
                </div>


            </div>
        )
    }
}
