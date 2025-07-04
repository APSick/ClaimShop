import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items" 

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id: 1, 
                    title: 'Vase 1',
                    img: './Vase-1.jpg', 
                    desc: 'Description', 
                    category: '',
                    price: '39.00'   
                },

                {
                    id: 2, 
                    title: 'Vase 2',
                    img: './Vase-2.jpg', 
                    desc: 'Description', 
                    category: '',
                    price: '140.00'   
                },

                {
                    id: 3, 
                    title: 'Vase 3',
                    img: './Vase-3.jpg', 
                    desc: 'Description', 
                    category: '',
                    price: '69.00'   
                },

                {
                    id: 4, 
                    title: 'Vase 4',
                    img: './Vase-4.jpg',
                    desc: 'Description', 
                    category: '',
                    price: '89.00'   
                }, 

                {
                    id: 5, 
                    title: 'Vase 5',
                    img: './Vase-5.jpg',
                    desc: 'Description', 
                    category: '',
                    price: '74.00'   
                }, 

                {
                    id: 6, 
                    title: 'Vase 6',
                    img: './Vase-6.jpg',
                    desc: 'Description', 
                    category: '',
                    price: '136.00'   
                }, 
            ]
        }

        this.addToOrder = this.addToOrder.bind(this)
    }
    render () {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} />
                <Items items={this.state.items} onAdd={this.addToOrder} />
                <Footer/>
            </div>
        );
    }

    addToOrder(item) {
        let isInArray = false 
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })

        if(!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
