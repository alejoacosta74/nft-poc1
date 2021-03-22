import React from 'react';

import { Card, CardText, CardBody, CardTitle, Col ,Row, Button, CardImg } from 'reactstrap';

const RenderNFT = (props) =>{
    return (
        <div className="container">                    
            <Row>{
                props.tokens.map((token, key) => (
                    <Col sm="4" key={key}>
                        <Card body key={key}>
                        <CardImg src={token.imgUrl} />
                        <CardTitle tag="h5">NFT #{key}.</CardTitle>
                        <div className="token" ></div>                        
                        <CardText>                    
                        - NFT ID: {key} <br/> - Owner: {token.owner} <br/> - Id: {token.id} </CardText>
                        <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    )
                )                            
            }            
            </Row>                
        </div>
    )
}

    export default RenderNFT;