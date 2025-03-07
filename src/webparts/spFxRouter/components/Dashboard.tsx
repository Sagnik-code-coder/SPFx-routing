import * as React from "react";
import { SPComponentLoader } from '@microsoft/sp-loader';
const Dashboard: React.FC = () => {
  React.useEffect(() => {
      // Load CSS files
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/style.css");
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/bootstrap.min.css");
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/Create.css");
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/jsgrid.min.css");
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/jsgrid-theme.min.css");
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/font-awesome.min.css");
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/jquery-ui.css");
      SPComponentLoader.loadCss("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/css/jquery.datetimepicker.min.css");
  
      // Load JS files sequentially
      SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/jquery.js", { globalExportsName: "jquery" })
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/jquery-ui.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/lang.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/QuickLunchScrollable.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/jquery.datetimepicker.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/bootstrap.min.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/jquery.validate.min.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/jsgrid.min.js", { globalExportsName: "jsGrid" }))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/Loader.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/Utility.js", { globalExportsName: "CommonUtility" }))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/PeoplePickerOnline.js"))
        .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/Dashboard.js"))
        .catch(error => console.error("Error loading scripts: ", error));
  
    }, []);
  
  
  return <div>
  `<div className="body-content">
    <div className="container-fluid">
      <div className="row">
        <div id="divHeader">
          <label id="dashboardHeaderTitle" htmlFor="dashboardHeaderTitle" key="dashboardHeaderTitle">Name Tags order History</label>
          <span style={{"display":"none"}} id="Currculture">`+ this.context.pageContext.cultureInfo.currentCultureName +`</span>
        </div>
        <div id="divCreateOrdreBtn" className="form-group col-sm-3">
          <button id="btnCreateOrder" type="button" key="btnCreateOrder" className="btn btn-dark primary_btn">Create Order</button>
        </div>
      </div>
      {/*<div class="row">
      <div class="form-group col-sm-3">
      </div>
      <div class="form-group col-sm-3">
      </div>
      <div class="form-group col-sm-5">
          
      </div>
  </div>*/}                
      {/*<div class="tab" id="tabsDashboard">
  </div>*/}
      <div id="jsGridNameTagOrders" className="jsgrid">
      </div>
      <div id="divPages">
        <div style={{"display":"flex"}}>
          <label id="pageSize" htmlFor="pageSize" key="pageSize">Records per pages</label>&nbsp;
          <select className="jsgrid-pager-nav-button" id="pages">
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
          </select>
        </div>
      </div>
      <div id="externalPager">
      </div>
      {/*<div id="divTotalItems">
      <label id="totalItems" for="totalItems" tkey="totalItems">Total Records: </label><label id="totalItemsCount" for="totalItemsCount" tkey="totalItemsCount">{t}</label>
  </div>*/}
      {/*<div id="CustomPager">
      <div class="jsgrid-pager">                        
          <span id="pageFirst" class="jsgrid-pager-nav-button "><a href="javascript:void(0);" tkey="first">First</a></span>
          <span id="pagePrev" class="jsgrid-pager-nav-button "><a href="javascript:void(0);" tkey="prev">Prev</a></span>
          <span id="pageNext" class="jsgrid-pager-nav-button"><a href="javascript:void(0);" tkey="next">Next</a></span>
          <span id="pageLast" class="jsgrid-pager-nav-button"><a href="javascript:void(0);" tkey="last">Last</a></span>
      </div>
  </div>*/}
      <br />  
      <br />
      <div className="row">
        <div id="divOrderApprovalBtns">
          <button id="btnReject" type="button" key="btnReject" className="btn btn-dark primary_btn">Reject</button>
          <button id="btnApprove" type="button" key="btnApprove" className="btn btn-dark primary_btn">Approve</button>
        </div>
      </div>              
    </div>
    <div id="nameTagModalUpdateInfo" className="modal">
      <div className="modal-content" id="nameTagModalUpdateSuccess">
        <h4 id="updateSuccess" key="updateSuccess">Name Tag order(s) updated successfully.</h4>
        <button id="btnCloseUpdatesuccess" type="button" key="updateinfoClose" className="btn btn-dark primary_btn">Close</button>
      </div>
    </div>
    <div id="nameTagModalProcessedInfo" className="modal">
      <div className="modal-content" id="nameTagModalProcessedInfo">
        <h4 id="processedinfo" key="processedinfo">This order is already processed, please select confirmed orders to approve or reject.</h4>
        <button id="btnprocessedinfo" type="button" key="updateinfoClose" className="btn btn-dark primary_btn">Close</button>
      </div>
    </div>
    <div id="modalApproveConfirm" className="modal">
      <div className="modal-content" id="modalApproveConfirmCont">
        <h4 id="lblApvConfirm" key="lblApvConfirm">Are you sure you want to approve the selected orders?</h4>
        <button id="btnApvConfirmNo" type="button" key="btnConfirmSubmitNo" className="btn btn-dark primary_btn">No</button>
        <button id="btnApvConfirmYes" type="button" key="btnConfirmSubmitYes" className="btn btn-dark primary_btn">Yes</button>
      </div>
    </div>
    <div id="modalRejtConfirm" className="modal">
      <div className="modal-content" id="modalRejtConfirmCont">
        <h4 id="lblRejtConfirm" key="lblRejtConfirm">Are you sure you want to reject the selected orders?</h4>
        <button id="btnRejtConfirmNo" type="button" key="btnConfirmSubmitNo" className="btn btn-dark primary_btn">No</button>
        <button id="btnRejtConfirmYes" type="button" key="btnConfirmSubmitYes" className="btn btn-dark primary_btn">Yes</button>
      </div>
    </div>
    <div>Title: <span id="userTitleDisplay" /></div>
    <div>Job Title: <span id="userRoleDisplay" /></div>
  </div>`
</div>;
};

export default Dashboard;
