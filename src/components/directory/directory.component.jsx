import React, {Component} from "react";

import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Direcotry extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'HATS',
                    imagUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'JACKETS',
                    imagUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'SNEAKERS',
                    imagUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'WOMENS',
                    imagUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size:'large'
                },
                {
                    title: 'mens',
                    imagUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size:'large'
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imagUrl,id,size})=>{
                        return (
                            <MenuItem key={id} title={title} imageUrl={imagUrl} size={size} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Direcotry;