import { Click, ClickResponse } from "../types/clicks"
import axios from 'axios'

export function importClick(click: Click): Promise<ClickResponse> {

    return axios.get('https://api.konnektive.com/landers/clicks/import/',
        {
            params: click
        }
    )
        .then(response => {
            let clickResponse: ClickResponse = response.data;
            return clickResponse;
        })
}
