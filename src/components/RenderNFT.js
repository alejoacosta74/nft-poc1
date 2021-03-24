import React from 'react';

import { Card, CardText, CardBody, CardTitle, Col ,Row, Button, CardImg } from 'reactstrap';

const RenderNFT = (props) =>{
    return (
        <div className="container">                    
            <Row>{
                props.tokens.map((token, key) => (
                    <Col sm="4" key={key}>
                        <CardTitle tag="h5">NFT #{token.id}.</CardTitle>
                        <Card body key={key}>                        
                        <CardImg src={token.imgUrl} />                                                                        
                        <CardText>                    
                        - Owner (address): {token.owner} <br/> </CardText>
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