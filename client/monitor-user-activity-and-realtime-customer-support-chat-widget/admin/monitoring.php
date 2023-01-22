<?php include ("header.php"); ?>

<main>
    <div class="container-fluid">
        <h1 class="mt-4">Monitoring</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">All users on the website</li>
        </ol>

        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <tr>
                        <th>User IP</th>
                        <th>Country</th>
                        <th>Previous page</th>
                        <th>Current page</th>
                        <th>Browser</th>
                        <th>Actions</th>
                    </tr>

                    <tbody id="users-list"></tbody>
                </table>
            </div>
        </div>
    </div>
</main>

<div class="modal" id="customerSupportChatModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Customer support</h5>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">

            </div>

            <div class="modal-footer">

                <form method="POST" onsubmit="return tracker.sendMessage(this);" style="display: contents;">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Write your message here..." name="message" required autocomplete="off" />

                        <button class="btn btn-primary" style="border-radius: 0px;" type="submit">Send</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>

<div class="modal" id="historyModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">History</h5>
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th>IP</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>

                    <tbody></tbody>
                </table>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<input type="hidden" id="admin-id" value="565" />

<script>
    window.addEventListener("load", function () {
        tracker.init();
    });
</script>

<?php include ("footer.php"); ?>