import { Order, OrderResponse } from "../types/order"
import axios from 'axios'

export function importOrder(order: Order): Promise<OrderResponse> {
    return axios.get('https://api.konnektive.com/order/import/', { params: order })
        .then(response => {
            let orderResponse: OrderResponse = response.data;
            return orderResponse;
        })
}
