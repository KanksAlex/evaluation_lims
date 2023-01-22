export default function Monitoring() {
        <div>
          <main>
            <div className="container-fluid">
              <h1 className="mt-4">Monitoring</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">All users on the website</li>
              </ol>
              <div className="row">
                <div className="col-md-12">
                  <table className="table">
                    <tbody><tr>
                        <th>User IP</th>
                        <th>Country</th>
                        <th>Previous page</th>
                        <th>Current page</th>
                        <th>Browser</th>
                        <th>Actions</th>
                      </tr>
                    </tbody><tbody id="users-list" />
                  </table>
                </div>
              </div>
            </div>
          </main>

          <div className="modal" id="customerSupportChatModal">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Customer support</h5>
                  <button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div className="modal-body">
                </div>
                <div className="modal-footer">
                  <form method="POST" onsubmit="return tracker.sendMessage(this);" style={{display: 'contents'}}>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Write your message here..." name="message" required autoComplete="off" />
                      <button className="btn btn-primary" style={{borderRadius: '0px'}} type="submit">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal" id="historyModal" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">History</h5>
                  <button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th>IP</th>
                        <th>From</th>
                        <th>To</th>
                      </tr>
                    </thead>
                    <tbody />
                  </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" id="admin-id" defaultValue={565} />
        </div>
    
    }