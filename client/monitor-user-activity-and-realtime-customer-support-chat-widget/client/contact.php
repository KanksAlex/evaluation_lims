<?php include ("header.php"); ?>

    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- Title -->
                <h1 class="mt-4">Contact us</h1>
            </div>
        </div>

        <div class="row" style="margin-top: 30px; margin-bottom: 30px;">
            <div class="col-md-6">
                <form method="POST" action="send-contact-message.php">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control" required />
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" name="email" class="form-control" required />
                    </div>

                    <div class="form-group">
                        <label>Message</label>
                        <textarea name="message" class="form-control" required></textarea>
                    </div>

                    <input type="submit" name="submit" class="btn btn-primary" value="Send message" />
                </form>
            </div>

            <div class="col-md-6">
                <iframe width="100%" height="500" src="https://maps.google.com/maps?q=Switzerland&output=embed"></iframe>
            </div>
        </div>
    </div>

    <script>
        document.querySelector("title").innerHTML = "Contact us";
    </script>

<?php include ("footer.php"); ?>