import React from 'react';
import "./studentProfile.css";

export default function studentProfile() {
    return (
        <div>
            <div class="topbar">
                <a href="">logout</a>
                <a href="">Support</a>
                <a href="">work</a>
                <a href="">Home</a>
            </div>
            <div class="container">
                <div class="main">

                    <div class="row">
                        <div class="col-md-4 mt-1">
                            <div class="card text-center sidebar">
                                <div class="card-body">
                                    <img src="image.jpg" class="rounded-circle" width="150"/>
                                        <div class="mt-3">
                                            <h3 style="text-decoration: underline; color: black;">Lakshya Srivastava</h3>
                                            <a href="">Home</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 mt-1">
                            <div class="card mb-3 content">
                                <h2 class="m-3 pt-3">Student Details</h2>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <h5>User Name</h5>
                                        </div>
                                        <div class="col-md-9 text-secondary">
                                            LakshyaS
                                        </div>
                                    </div>
                                    <hr/>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h5>Email</h5>
                                            </div>
                                            <div class="col-md-9 text-secondary">
                                                Lakshya.sr@gmail.com
                                            </div>
                                        </div>
                                        <hr/>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <h5>First Name</h5>
                                                </div>
                                                <div class="col-md-9 text-secondary">
                                                    Lakshya
                                                </div>
                                            </div>
                                            <hr/>
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <h5>Last Name</h5>
                                                    </div>
                                                    <div class="col-md-9 text-secondary">
                                                        Srivastava
                                                    </div>
                                                </div>
                                                <hr/>
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <h5>Phone</h5>
                                                        </div>
                                                        <div class="col-md-9 text-secondary">
                                                            9234698746
                                                        </div>.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card mb-3 content">
                                                <h2 class="m-3">Topics Interested</h2>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <h5>Topic1</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic2</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic3</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic4</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic5</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic6</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic7</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic8</h5>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <h5>Topic9</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
}