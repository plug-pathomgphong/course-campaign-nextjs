import React from 'react'
import { Menu } from 'semantic-ui-react'

const Header = (props) => {
    return (
        <Menu style={{marginTop : '10px'}}>
            <Menu.Item name='CrowdCoin'> CrowdCoin </Menu.Item>
            <Menu.Menu position="right"
            >
                <Menu.Item name='Campaign'> Campaign </Menu.Item>
                <Menu.Item name='add'>+</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Header