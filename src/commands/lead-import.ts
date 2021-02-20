import { Lead, LeadResponse } from "../types/lead"
import axios from 'axios'

export function importLead(lead: Lead): Promise<LeadResponse> {
    return axios.get('https://api.konnektive.com/leads/import/', { params: lead })
        .then(response => {
            let leadResponse: LeadResponse = response.data;
            return leadResponse;
        })
}
