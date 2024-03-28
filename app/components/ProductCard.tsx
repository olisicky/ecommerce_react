import {Card, CardBody, Image, CardFooter} from "@nextui-org/react";

import React from 'react'

type Product = {
    image: string;
    description: string;
    brand: string;
    formattedPrice: number;
}

const ProductCard = (props: Product) => {
    const { image, description, brand, formattedPrice } = props;
    return (
        <Card>
            <CardBody className="overflow-visible py-5">
                <img 
                    src={props.image}
                    className="rounded-3xl">
                </img> 
                <p>{props.description}</p>
            </CardBody>
            <CardFooter className="text-lg justify-between">
                <b>{props.brand}</b>
                <p>{props.formattedPrice} $</p>
          </CardFooter>
        </Card>
    )
}

export default ProductCard