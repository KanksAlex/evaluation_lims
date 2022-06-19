 <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
    </div>
    <!-- /.container -->
  </footer>

  <div class="container" id="chat-widget">
    <div class="row chat-window col-md-4" id="chat_window_1" style="margin-left:10px; position: fixed; right: 0px;">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading top-bar">
                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="panel-title"><span class="fa fa-comment"></span> Customer support</h5>
                        </div>

                        <div class="col-md-4" style="text-align: right;">
                            <a href="javascript:void(0);" style="color: white;"><span id="minim_chat_window" class="fa fa-plus icon_minim panel-collapsed" onclick="monitor.onIconMinimClick(this);"></span></a>
                        </div>
                    </div>
                </div>

                <div class="panel-body msg_container_base" style="display: none;">
                    <!-- chat will be displayed here -->

                    <form method="POST" onsubmit="return monitor.initializeChat(this);" style="display: contents;" id="form-initialize-chat-widget">

                        <div class="form-group" style="margin-top: 10px;">
                            <label>Name</label>
                            <input type="text" autocomplete="off" class="form-control" placeholder="Enter name" name="name" required />
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" autocomplete="off" class="form-control" placeholder="Enter email" name="email" required />
                        </div>

                        <div class="form-group">
                            <select class="form-select" aria-label="Default select example" >
                              <option selected>Select an Department</option>
                              <option value="1">VIRAL LOAD</option>
                              <option value="2">EID</option>
                              <option value="3">SAR COVID-19</option>
                            </select>
                        </div>

                        <button class="btn btn-primary" type="submit" name="submit">
                            Start chat
                        </button>
                    </form>

                </div>
                <div class="panel-footer">

                    <form method="POST" onsubmit="return monitor.sendMessage(this);" style="display: contents;" id="form-send-message">
                        <div class="input-group">
                            <input type="text" class="form-control message input-sm chat_input" onfocus="monitor.onChatInputFocus(this);" placeholder="Write your message here..." name="message" autocomplete="off" required />
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="submit" style="border-radius: 0px;">Send</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <link rel="stylesheet" href="user-activity-monitor/monitor.css?v=<?php echo time(); ?>" />
  <link rel="stylesheet" href="user-activity-monitor/font-awesome/font-awesome.css" />

  <script src="user-activity-monitor/jquery-3.3.1.min.js"></script>
  <script src="user-activity-monitor/bootstrap.min.js"></script>
  <script src="user-activity-monitor/socket.io.js"></script>
  <script src="user-activity-monitor/monitor.js?v=<?php echo time(); ?>"></script>

  <script>
    window.addEventListener("load", function () {
        monitor.init();
    });
</script>

</body>

</html>
