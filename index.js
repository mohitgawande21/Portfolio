<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" media="screen and (max-width: 1040px)" href="./phone.css">
</head>
<body>
    <header>
        <nav class="flex" id="container">
            <div class="left">
                <div id="logo">
                    <img src="./images/logo.svg" alt="">
                </div>
            </div>
            <div id="mid">
                <a href="#container">Home</a>
                <a href="#About">About</a>
                <a href="#Services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="right">
                <a href="#contact"><button>Contact</button></a>
            </div>
        </nav>

        <div class=" flex header_d">
            <div class="left">
                <img id="photo" src="./images/prabhas.jpg" alt="">
            </div>
            <div class="right-t ">
                <h4>Mohit Gawande</h6>
                <h1>I'm a Creative <span>Designer</span></h1>
                <p>I am Full Stack Web Designer, Here You will Get Fine and Thin Web Designs.</p>
                <button id="btn">Donload CV</button>
            </div>
        </div>
    </section>
    <section id="contact">
        <h1 class="h-primary center">Contact Us</h1>
        <div id="contact-box">
            <form action="">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter your Name">
                </div>
                <div class="form-group">
                    <label for="name">Phone No.:</label>
                    <input type="phone" name="name" id="name" placeholder="Enter your Phone Number">
                </div>
                <div class="form-group">
                    <label for="name">Email:</label>
                    <input type="email" name="name" id="name" placeholder="Enter your Email">
                </div>
                <div class="form-group">
                    <label for="name">Message:</label>
                    <textarea type="message" name="name" id="name" placeholder="Enter your Meassage"></textarea>
                </div>
            </form>
         </div>
    </section>
    </header>
</body>
</html>
