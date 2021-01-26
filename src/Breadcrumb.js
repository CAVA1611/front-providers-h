import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Breadcrumb, BreadcrumbItem} from "react-bootstrap";


class breadCrumb extends React.Component{
    render(){
      return(
          <Breadcrumb>
            <BreadcrumbItem a href="/">Orders</BreadcrumbItem>
            <BreadcrumbItem a href="/#">Providers</BreadcrumbItem>
            
          </Breadcrumb>
      )
    };
}



export default breadCrumb;


