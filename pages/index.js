import React, { Component } from 'react'
import factory from '../ethereum/factory'
import { Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'

class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call()

        return { campaigns }
    }

    renderCampaigns(){
        const items = [
            {
              header: 'Project Report - April',
              description:
                'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
              meta: 'ROI: 30%',
              fluid: true,
            },
            {
              header: 'Project Report - May',
              description:
                'Bring to the table win-win survival strategies to ensure proactive domination.',
              meta: 'ROI: 34%',
              fluid: true,
            },
            {
              header: 'Project Report - June',
              description:
                'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
              meta: 'ROI: 27%',
              fluid: true,
            },
          ]
        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <div>
                <h3>Open Campaigns</h3>
                <Button
                  floated="right"
                  content="Create Campaign"
                  icon="add circle"
                  primary
                />
                {this.renderCampaigns()}
                    
                </div>                
            </Layout>

        );
    }
}

export default CampaignIndex