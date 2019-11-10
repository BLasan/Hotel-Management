import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { disable_image_slider } from '../../../../scripts/frontend/disable_href_links';
import { image_slider_uploader } from '../../../../scripts/frontend/image_uploader';
import { remove_image_slider } from '../../../../scripts/frontend/image_uploader';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { disable_search_bar } from '../../../../scripts/frontend/disable_enable_search_bar.js';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(storage, _db) {
        this.storage = storage;
        this._db = _db;
    }
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.hexToRGB = function (hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        }
        else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        disable_search_bar();
        this.chartColor = "#FFFFFF";
        this.canvas = document.getElementById("bigDashboardChart");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
        this.lineBigDashboardChartData = [
            {
                label: "Data",
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                borderWidth: 2,
                data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
            }
        ];
        this.lineBigDashboardChartColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: this.chartColor,
                pointBorderColor: this.chartColor,
                pointBackgroundColor: "#2c2c2c",
                pointHoverBackgroundColor: "#2c2c2c",
                pointHoverBorderColor: this.chartColor,
            }
        ];
        this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        this.lineBigDashboardChartOptions = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            legend: {
                position: "bottom",
                fillStyle: "#FFF",
                display: false
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold",
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "transparent"
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent",
                            display: false,
                        },
                        ticks: {
                            padding: 10,
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold"
                        }
                    }]
            }
        };
        this.lineBigDashboardChartType = 'line';
        this.gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.canvas = document.getElementById("lineChartExample");
        // this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.lineChartData = [
            {
                label: "Active Users",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 2,
                data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
            }
        ];
        this.lineChartColors = [
            {
                borderColor: "#f96332",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#f96332",
                backgroundColor: this.gradientFill
            }
        ];
        this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.lineChartOptions = this.gradientChartOptionsConfiguration;
        this.lineChartType = 'line';
        this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
        //  this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#18ce0f');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
        this.lineChartWithNumbersAndGridData = [
            {
                label: "Email Stats",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 2,
                data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
            }
        ];
        this.lineChartWithNumbersAndGridColors = [
            {
                borderColor: "#18ce0f",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#18ce0f",
                backgroundColor: this.gradientFill
            }
        ];
        this.lineChartWithNumbersAndGridLabels = ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"];
        this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;
        this.lineChartWithNumbersAndGridType = 'line';
        this.canvas = document.getElementById("barChartSimpleGradientsNumbers");
        // this.ctx = this.canvas.getContext("2d");
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));
        this.lineChartGradientsNumbersData = [
            {
                label: "Active Countries",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
            }
        ];
        this.lineChartGradientsNumbersColors = [
            {
                backgroundColor: this.gradientFill,
                borderColor: "#2CA8FF",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "#2CA8FF",
            }
        ];
        this.lineChartGradientsNumbersLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.lineChartGradientsNumbersOptions = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawBorder: false
                        }
                    }],
                xAxes: [{
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.lineChartGradientsNumbersType = 'bar';
    };
    DashboardComponent.prototype.image_uploader = function () {
        disable_image_slider();
        image_slider_uploader();
    };
    DashboardComponent.prototype.get_files = function (event) {
        console.log(event.target.files);
        this.file_list = event.target.files;
    };
    DashboardComponent.prototype.upload_images = function () {
        var database = this._db;
        var this_function = this;
        var collection = database.collection('image_corousals');
        var _loop_1 = function () {
            imageId = "image_carousal/image" + i;
            var storageRef = this_1.storage.ref(imageId);
            storageRef.put(this_1.file_list.item(i)).then(function (snapshot) {
                storageRef.getDownloadURL().subscribe(function (url) {
                    // document.querySelector('img').src = url;
                    var fileName = snapshot.metadata.name;
                    var fileContentType = snapshot.metadata.contentType;
                    var fileSize = snapshot.metadata.size;
                    var fileUrl = url;
                    var fileTimeCreated = snapshot.metadata.timeCreated;
                    var obj = { fileName: fileName, contentType: fileContentType, fileSize: fileSize, fileUrl: fileUrl, fileTimeCreated: fileTimeCreated };
                    collection.doc(snapshot.metadata.name).set(obj).then(function (docs) {
                        console.log("Success");
                        this_function.remove_images();
                    }).catch(function (error) {
                        console.log(error);
                    });
                });
            }).catch(function (error) {
                console.log(error);
            });
        };
        var this_1 = this, imageId;
        for (var i = 0; i < this.file_list.length; i++) {
            _loop_1();
        }
    };
    DashboardComponent.prototype.remove_images = function () {
        remove_image_slider(this.file_list.length);
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireStorage, AngularFirestore])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map