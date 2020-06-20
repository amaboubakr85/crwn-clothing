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
                    id: 1,
                    linkUrl:'hats'
                },
                {
                    title: 'JACKETS',
                    imagUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl:''
                },
                {
                    title: 'SNEAKERS',
                    imagUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl:''
                },
                {
                    title: 'WOMENS',
                    imagUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size:'large',
                    linkUrl:''
                },
                {
                    title: 'mens',
                    imagUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size:'large',
                    linkUrl:''
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imagUrl,id,size,linkUrl})=>{
                        return (
                            <MenuItem key={id} title={title} imageUrl={imagUrl} size={size} linkUrl={linkUrl} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Direcotry;