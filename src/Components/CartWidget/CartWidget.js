import React from 'react'
import { FaCartPlus } from "react-icons/fa";

function CartWidget() {
    return (
        <div>
            <FaCartPlus size="2em" color="#fff" style={{
            position: 'relative',
            right: '-5px',
            height: '30px'}}></FaCartPlus>
        </div>
    )
}

export default CartWidget
