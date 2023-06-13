import React, { Component } from 'react';
import Man from './Man';
import Woman from './Woman';


class ShowProduct extends Component {
    render() {
        return (
            <div class="fashion_section">

                <div id="main_slider" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container">
                                <h1 class="fashion_taital">Man</h1>
                                <div class="fashion_section_2">
                                    <div class="row">
                                        <Man></Man>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="main_slider" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container">
                                <h1 class="fashion_taital">Woman</h1>
                                <div class="fashion_section_2">
                                    <div class="row">
                                        <Woman></Woman>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ShowProduct;