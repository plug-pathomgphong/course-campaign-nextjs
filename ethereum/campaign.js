import web3 from './web3'
import CampaignJson from './build/Campaign.json'

const Campaign = (address) => {
    return  new web3.eth.Contract(
        JSON.parse(CampaignJson.interface),
        address
    )
}

export default Campaign