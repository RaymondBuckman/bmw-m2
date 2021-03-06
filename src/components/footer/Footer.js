import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
        <div className="footer-div-1"> 
            <ul className="flex-container">
                <li className="flex-item scrollmagic-scale-flex-box">
                    <h2 role="heading">Customize</h2>
                    <ul id="customize-list">
                        <li>
                            <a href="https://www.bmwusa.com/byo.html#!/build/color/dgnkcwwn" target="_blank" rel="noopener" role="link">Build & Price</a>
                        </li>
                        <li>
                            <a href="https://www.bmwusa.com/mperformanceparts.html" target="_blank" rel="noopener" role="link">BMW Performance Parts</a>
                        </li>
                        <li>
                            <a href="https://www.akrapovic.com/#!/car/products?brandId=19&modelId=796&phaseId=1" target="_blank" rel="noopener" role="link">Akrapovič</a>
                        </li>
            
            
                    </ul>
                </li>
                <li className="flex-item scrollmagic-scale-flex-box">
                    <h2 role="heading">Find Your M2</h2>
                    <ul id="find-list">
                        <li>
                            <a href="https://www.bmwusa.com/contact/dealer.html" target="_blank" rel="noopener" role="link">Contact a Dealer</a>
                        </li>
                        <li>
                            <a href="https://www.bmwusa.com/inventory.html#!/" target="_blank" rel="noopener" role="link">Search Inventory</a>
                        </li>
                    </ul>
                </li>
                <li className="flex-item scrollmagic-scale-flex-box">
                    <h2 role="heading">About BMW</h2>
                    <ul id="about-bmw-list">
                        <li>
                            <a href="https://www.bmwgroup.com/en/company/history.html" target="_blank" rel="noopener" role="link">History</a>
                        </li>
                        <li>
                            <a href="https://www.bmw-motorsport.com/en/home.html" target="_blank" rel="noopener" role="link">Motorsport</a>
                        </li>
                        <li>
                            <a href="https://www.bmwgroup.com/en.html" target="_blank" rel="noopener" role="link">BMW Group</a>
                        </li>
                    </ul>
                </li>
                <li className="flex-item scrollmagic-scale-flex-box">
                    <h2 role="heading">Other Links</h2>
                    <ul id="other-links-list">
                        <li>
                            <a href="http://www.simonpuschmann.com/portfolio/" target="_blank" rel="noopener" role="link">Simon Puschmann Photography</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>           
        );
    }
}
