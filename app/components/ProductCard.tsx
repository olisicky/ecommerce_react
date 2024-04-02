import {Card, CardHeader, Button, CardBody, Image, Divider} from "@nextui-org/react";
import React from 'react';


type Product = {
    image: string;
    description: string;
    brand: string;
    formattedPrice: number;
    sale: number | string
}

const ProductCard = (props: Product) => {
    const { image, description, brand, formattedPrice, sale} = props;

    return (
        <Card isHoverable isPressable>
            <CardHeader className="text-xl justify-between">
                <b>{props.brand}</b>
                {props.sale === null ? (
                    <p>{props.formattedPrice} $</p>

                ) : (
                    <div className="grid grid-cols-2 gap-1">
                        <p className="line-through">{props.formattedPrice} $</p>
                        <p className="text-red-400">{Math.ceil((1 - Number(props.sale) / 100) * Number(props.formattedPrice))} $</p>
                        
                    </div>
                )}
            </CardHeader>
            <CardBody className="overflow-visible py-5">
                <div className="flex justify-center items-center">
                    <Image 
                        src={props.image}
                        >
                    </Image>
                </div>
                <Divider />
                <p className="flex align-text-bottom justify-center">{props.description}</p>  
                <Button className="flex">Add to card</Button> 
            </CardBody>
        </Card>
    )
}

export default ProductCard