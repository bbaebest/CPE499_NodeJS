const express = require('express');
const mydata =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ร้านขายแมวสุดน่ารัก</title>
        <link rel="stylesheet" href="public/style.css"
    <body>
    <style>
    body{
        margin: 0;
        padding: 0;
        background-color: rgb(155, 136, 136);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }   
    h3{
        text-align: center;
        color: orange;
        text-shadow: black;
        font-size: 30px;
        padding: 10px;
    }
    table{
        text-align: center;
        background-color: burlywood;
        color: black;
        width: 50%;
        margin-left: 300px;
        margin-right: 300px;
        font-size: 18px;
    }
    .navbar{
        text-align: center;
    }
    .navbar li{
        display: inline-block;
        padding: 0px 20px;
        font-size: 20px;
        border-radius: 1.5rem;
    }
    .navbar li a {
        text-decoration: none;
        display: flex;
        transition: all 0.3ms ease 0s;
    }
    .navbar li a :hover{
        color: red;
    }
    </style>
        <div class="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </div>
        <h3 text-align="center">Cat  Shop</h3>
        <table border="1" cellpadding="10">
            <thead text-align ="center">
                <th>รูปภาพ</th>
                <th>ชื่อ</th>
                <th>ราคา</th>
                <th>อายุ</th>
            </thead>
            <tbody>
                <tr >
                    <div class="c1">
                        <td><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/335510041_767128931601078_4341144598422779986_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7g0iDWA_UG8AX_K1Xm4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ5DhMgn7IsMYZik9WCi9SEv2TagM34HdA-DueFHTqixg&oe=64378880" alt=""></td>
                    <td>Snowbell</td>
                    <td>4000</td>
                    <td>5ปี</td>
                    <td><a href="#">ซื้อ</a></td>
                    </div>
                </tr>
                <tr>
                    <div class="c2">
                        <td><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/335449220_1246031476316063_4600187237600600073_n.jpg?stp=dst-jpg_s280x280&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=l2uBl4cPqm0AX_QXs1u&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS0vP8bl0jJMJbWFrdwBZeFyhsSgJaUljTrxw8OFvQ_BA&oe=64377F09" alt=""  ></td>
                    <td>Winner</td>
                    <td>3500</td>
                    <td>3ปี</td>
                    <td><a href="#">ซื้อ</a></td>
                    </div>
                </tr>
                <tr>
                    <div class="c3">
                        <td><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/335132978_891290248769399_9008965068741206796_n.jpg?stp=dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qDzj8WooJegAX8kjbsc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRiZt4vkasBljJ8ElEWpzh-HzRUugD-o9eJy81xx_9PJw&oe=6437CFE7" alt=""></td>
                    <td>Marvel</td>
                    <td>5500</td>
                    <td>3ปี</td>
                    <td><a href="#">ซื้อ</a></td>
                    </div>
                </tr>
                <tr>
                    <div class="c4">
                        <td><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/335132370_1432456767500494_1113237705601973277_n.jpg?stp=dst-jpg_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=9zKeq4RFV5QAX-HuHJT&_nc_oc=AQlpZ_3EFyXDXF4KNSKm6RTwgAfrpcL0n2gLFZVC3HbE3LMIJGFxA3UUZ1bntN1LmTrA__-YhDC8ruoo6pal1J97&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSO7W0gB4WGlGP2arjFFLXXMJgKHQalrh_fZKypu3eJnA&oe=6437D23F" alt=""></td>
                    <td>Garfew</td>
                    <td>7000</td>
                    <td>3ปี</td>
                    <td><a href="#">ซื้อ</a></td>
                    </div>
                </tr>
                <tr>
                    <div class="c5">
                        <td><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/335510044_537032041876968_5886825444409249604_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=FEAN1fF2-IcAX9EX1Eo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSSsnq_s_4s75im37kbb7IxE7XaP-0jKuGEGMvGUMiM5A&oe=6437D7DC" alt=""></td>
                    <td>Noah</td>
                    <td>2000</td>
                    <td>1ปี</td>
                    <td><a href="#">ซื้อ</a></td>
                    </div>
                </tr>
            </tbody>
        </table>
    </body>
    </html>`;
    module.exports = mydata;