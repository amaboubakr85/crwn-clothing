import React from "react";
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }

    render() {
        // console.log(this.state.collections)

        return (
            <div className='shop-page'>
                {
                    this.state.collections.map((collection)=>(
                        <CollectionPreview key={collection.id} collection={collection} />
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;