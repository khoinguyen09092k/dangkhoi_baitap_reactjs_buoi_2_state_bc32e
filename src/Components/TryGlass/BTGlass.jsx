import React, { Component } from 'react'
import './style.css'
import data from './dataGlasses.json'
export default class BTGlass extends Component {

  state = {
    glass: {
      "id": 1,
      "price": "30$",
      "name": "GUCCI G8850U",
      "url": "./img/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
  }
  render() {
    return (
      <div class="container vglasses py-3">
        <div class="row  justify-content-between">
          <div class="col-6 vglasses__left">
            <div class="row">
              <div class="col-12">
                <h1 class="mb-2 text-center text-danger">Virtual Glasses</h1>

                <div className='list-glass'>
                  {
                    data.map((value) => {
                      return <div className='col-4'  key={value.id} >
                        
                       
                        <img src={value.url} width={120} alt=""
                         onClick={()=>{
                          this.setState({
                            glass: value
                          })
                        }} />
                     

                      </div>
                    })
                  }

                </div>


              </div>
            </div>
            <div class="row" id="vglassesList">
            </div>
          </div>
          <div class="col-5 vglasses__right p-0">
            <div class="vglasses__card">
              <div class="vglasses__model" id="avatar">
                <img src="./img/model.jpg" alt="" id="img" />
               

                <img src={this.state.glass.url} alt="" />
              
              </div>
              <div id="glassesInfo" class="vglasses__info"  >
                <h4>{this.state.glass.name}</h4>
                <button class="btn btn-danger">{this.state.glass.price}</button>
                <p>{this.state.glass.desc}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
