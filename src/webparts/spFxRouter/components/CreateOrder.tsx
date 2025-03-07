import * as React from "react";
import { SPComponentLoader } from '@microsoft/sp-loader';
const CreateOrder: React.FC = () => {
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
      .then(() => SPComponentLoader.loadScript("https://mazdausa.sharepoint.com/sites/MCIOneMazdaDev/nametag/SiteAssets/js/CreateOrder.js"))
      .catch(error => console.error("Error loading scripts: ", error));

  }, []);

  return <div>
  `<div className="body-content">
    <div className="container-fluid">
      <div id="divInput" className="tabcontent">
        <div className="row">
          <div id="divHeader">
            <label id="mainScreenHeaderTitle" htmlFor="mainScreenHeaderTitle" key="mainScreenHeaderTitle">Create NameTag Order</label>
          </div>
        </div>
        <div className="row" id="bulletPointsEn">
          <span style={{"display":"none"}} id="Currculture">`+ this.context.pageContext.cultureInfo.currentCultureName +`</span>
          <ul style={{"listStyleType":"disc"}}>
            <li><span className="bulletPoint">•</span><span id="bullet1" key="bullet1">All manager-level Mazda retail employees can order name tags for their teams.</span></li>
            <li><span className="bulletPoint">•</span><span id="bullet2" key="bullet2">Name tags can be ordered for anyone that has a valid One.Mazda/MDrive(?) profile.</span></li>
            <li><span className="bulletPoint">•</span><span id="bullet3" key="bullet3"><b>SEARCH and SELECT employee(s), review your order, and click SUBMIT ORDER to proceed.</b></span></li>
          </ul>
        </div>
        <div className="row" id="divSearch">
          <div id="dvSearchLbl" className="form-group col-sm-3">
            <label htmlFor="lblSearchEmployee" key="lblSearchEmployee" id="lblSearchEmployee">Search Employee</label>&nbsp;<span className="requiredField">*</span>
            <input type="text" className="form-control" id="txtEmployeeName" />
          </div>
          <div className="form-group col-sm-3">
          </div>
          {/*<div class="form-group col-sm-3" id="divModel">
      <label id="lblSearch" for="pageSize" tkey="lblSearch">Search by name or job title</label>
  </div>
  <div class="form-group col-sm-3" id="divEngine">
      <input type="text" class="form-control" id="txtSearch" placeholder="Search">
  </div>*/}
        </div>                
      </div>
      {/*<div class="tab" id="tabsDashboard">
  </div>*/}
      <div id="jsGridEmployee" className="jsgrid">
      </div>            
      <div id="externalPager">                
      </div>
      <div id="divPagesCrOrd">
        <div style={{"display":"flex"}}>
          <label id="pageSize" htmlFor="pageSize" key="pageSize">Records per pages</label>&nbsp;
          <select className="jsgrid-pager-nav-button" id="pagesCrtOrd">
            <option>5</option>
            <option selected>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
          </select>
        </div>
      </div>
      {/*<div id="divTotalItems">
      <label id="totalItems" for="totalItems" tkey="totalItems">Total Records: </label><label id="totalItemsCount" for="totalItemsCount" tkey="totalItemsCount">{t}</label>
  </div>*/}
      <div id="CustomPager">
        <div className="jsgrid-pager">
          {/*<label id="pageNumber" for="pageNumber" tkey="pageNumber">Showing: {f} to {t}</label>*/}
          {/*<select class="jsgrid-pager-nav-button " id="pages">
      <option>5</option>
      <option>10</option>
      <option>15</option>
      <option>20</option>
  </select>*/}
          {/*<span id="pageFirst" class="jsgrid-pager-nav-button "><a href="javascript:void(0);" tkey="first">First</a></span>
          <span id="pagePrev" class="jsgrid-pager-nav-button "><a href="javascript:void(0);" tkey="prev">Prev</a></span>
          <span id="pageNext" class="jsgrid-pager-nav-button"><a href="javascript:void(0);" tkey="next">Next</a></span>
          <span id="pageLast" class="jsgrid-pager-nav-button"><a href="javascript:void(0);" tkey="last">Last</a></span>*/}
        </div>
      </div>
      <br />
      <br />
      {/*<div class="row">*/}
      <div className="form-group col-sm-6" id="divLblMySelection"><label id="lblMySelection" htmlFor="lblMySelection" key="lblMySelection">Selected Employees for NameTag</label></div><br /><br />
      <div className="row" id="divInstruction">
        <ul style={{"listStyleType":"disc"}}>
          <li><span className="bulletPoint">1</span><span id="instruction1" key="instruction1">Click pencil icon on each employee name to fill in their details.</span></li>
          <li><span className="bulletPoint">2</span><span id="instruction2" key="instruction2">Click the green check to save.</span></li>
          <li><span className="bulletPoint">3</span><span id="instruction3" key="instruction3"><b>Click delete icon to remove selected rows.</b></span></li>
        </ul>
      </div>
      {/*</div>*/}
      <div id="jsGridSelectedEmp" className="jsgrid">
      </div>
      <br />
      <div id="jsGrid" className="jsgrid">
        <div className="jsgrid-grid-header jsgrid-header-scrollbar">
          <table className="jsgrid-table">
            <thead>
              <tr className="jsgrid-header-row">
                {/*<th class="jsgrid-header-cell jsgrid-header-sortable jsgrid-header-sort jsgrid-header-sort-desc" style="width: 10%;">RowID</th>*/}
                <th className="jsgrid-header-cell" key="grdQty">Qty</th>
                <th className="jsgrid-header-cell" key="grdCost">Cost</th>
                {/*<th class="jsgrid-header-cell" tkey="jsGridTax">Tax</th>*/}
                <th className="jsgrid-header-cell" key="grdTotalCost">Total Cost</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="jsgrid-grid-body">
          <table id="tblTotalTax" className="jsgrid-table">
            <tbody>
              <tr className="jsgrid-row">
                <td className="jsgrid-cell"><label htmlFor="lblQty" id="lblQty">0.00</label></td>
                <td className="jsgrid-cell"><label htmlFor="lblCost" id="lblCost">0.00</label></td>
                {/*<td class="jsgrid-cell"><label for="lblTax" tkey="lblTax" id="lblTax">0.00</label></td>*/}
                <td className="jsgrid-cell"><label htmlFor="lblTotalCost" id="lblTotalCost">0.00</label></td>
              </tr>
            </tbody>
          </table>
        </div><div className="jsgrid-pager-container" style={{"display":"none"}} /><div className="jsgrid-load-shader" /><div className="jsgrid-load-panel" style={{"display":"none","position":"absolute","top":"50%","left":"50%"}}>Please, wait...</div>
      </div>
      <br />
      <div className="row">
        <div className="form-group col-sm-12">
          <label htmlFor="orderDescr" key="orderDescr" id="orderDescr">Order Description:</label>&nbsp;<span className="requiredField">*</span>
          <textarea className="form-control" id="txtOrderDescr" maxLength={1200} required defaultValue={""} />
        </div>
      </div>
      {/*<div class="row">
  <div class="form-group col-sm-3">
      <label for="confirmEmail" tkey="confirmEmail" id="confirmEmail">Send confirmation email to:</label>&nbsp;<span class="requiredField">*</span>
  </div>
  <div class="form-group col-sm-3">
      <input type="text" class="form-control" id="txtConfirmEmail" placeholder="xyz@mazda.ca">
  </div>
    </div>*/}
      <br />
      <div className="row">
        <div className="form-group col-sm-6"><b id="lblWarningEn" key="lblWarning">Health &amp; Safety Warning: </b><span id="spHealthInst" key="spHealthInst"> Individuals with a pacemaker should refrain from the use of magnetic devices including a magnetic name tag.</span></div>
        <div className="colWidth-footer-btn" id="divSubmitOrder">
          <button id="btnSubmitOrder" type="button" key="btnSubmitOrder" className="btn btn-dark primary_btn">Submit Order</button>
          <button id="btnUpdateOrder" type="button" key="btnUpdateOrder" className="btn btn-dark primary_btn">Update Order</button>
          <button id="btnDeleteOrder" type="button" key="btnDeleteOrder" className="btn btn-dark primary_btn">Delete Order</button>
        </div>
      </div>
      <div id="modalConfirmOrder" className="modal">
        <div id="modalConfirmOrdCont" className="modal-content">
          <h4 id="confirmSubmitMsg" key="confirmSubmitMsg">Are you sure you want to submit this order? You will be charged accordingly on your monthly dealer statement.</h4><br /><br />
          <button id="btnConfirmSubmitNo" type="button" key="btnConfirmSubmitNo" className="btn btn-dark primary_btn">No</button>
          <button id="btnConfirmSubmitYes" type="button" key="btnConfirmSubmitYes" className="btn btn-dark primary_btn">Yes</button>
        </div>
      </div>
      <div id="modalNameTagOrdValidation" className="modal">
        <div id="modalNameTagOrdValidationCont" className="modal-content">
          <h4 id="ordValidationMsg" key="ordValidationMsg">Order for the selected employee is already added!</h4><br /><br />
          <button id="btnOrdValidationOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
      <div id="modalNameTagSuccessMsg" className="modal">
        <div id="modalNameTagSuccessMsgCont" className="modal-content">
          <h4 id="nameTagSuccessMsg" key="nameTagSuccessMsg">Order for NameTag has been submitted successfully!</h4><br /><br />
          <button id="btnNameTagSuccessMsgOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
      <div id="modalNameTagUpdSuccessMsg" className="modal">
        <div id="modalNameTagUpdSuccessMsgCont" className="modal-content">
          <h4 id="nameTagUpdSuccessMsg" key="nameTagUpdSuccessMsg">Order for NameTag has been updated successfully!</h4><br /><br />
          <button id="btnNameTagUpdSuccessMsgOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
      <div id="modalNameTagOrdValidation2" className="modal">
        <div className="modal-content" id="modalNameTagOrdValidationCont2">
          <h4 id="orderInfo" key="orderInfo">This order is already processed/confirmed, please select another employee.</h4>
          <button id="btnOrdValid2Close" type="button" key="updateinfoClose" className="btn btn-dark primary_btn">Close</button>
        </div>
      </div>
      <div id="modalRemoveSelectionConfirm" className="modal">
        <div className="modal-content" id="modalRemvConfirmCont">
          <h4 id="orderInfo" key="orderInfo">Are you sure, you want to remove from selection?</h4>
          <button id="btnRemvConfirmNo" type="button" key="btnConfirmSubmitNo" className="btn btn-dark primary_btn">No</button>
          <button id="btnRemvConfirmYes" type="button" key="btnConfirmSubmitYes" className="btn btn-dark primary_btn">Yes</button>
        </div>
      </div>
      <div id="modalRemoveOrderConfirm" className="modal">
        <div className="modal-content" id="modalRemvOrdConfirmCont">
          <h4 id="orderInfo" key="orderInfo">Are you sure, you want to remove the order?</h4>
          <button id="btnRemvOrdConfirmNo" type="button" key="btnConfirmSubmitNo" className="btn btn-dark primary_btn">No</button>
          <button id="btnRemvOrdConfirmYes" type="button" key="btnConfirmSubmitYes" className="btn btn-dark primary_btn">Yes</button>
        </div>
      </div>            
      <div id="modalNameTagDeleteSuccessMsg" className="modal">
        <div id="modalNameTagDeleteSuccessMsgCont" className="modal-content">
          <h4 id="nameTagDeleteSuccessMsg" key="nameTagDelSuccessMsg">NameTag order has been deleted successfully!</h4><br /><br />
          <button id="nameTagDeleteSuccessMsgOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
      <div id="modalNameTagDelValidMsg" className="modal">
        <div id="modalNameTagDelValidMsgCont" className="modal-content">
          <h4 id="modalNameTagDelValidMsg" key="modalNameTagDelValidMsg">Order Cannot be blank!</h4><br /><br />
          <button id="modalNameTagDelValidMsgOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
      <div id="modalNameTagCheckUpdMsg" className="modal">
        <div id="modalNameTagCheckUpdMsgCont" className="modal-content">
          <h4 id="modalNameTagCheckUpdMessage" key="modalNameTagCheckUpdMessage">Please provide Nametag Display Name and Quantity to proceed.</h4><br /><br />
          <button id="modalNameTagCheckUpdMsgOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
      <div id="modalNameTagValidSelection" className="modal">
        <div id="modalNameTagValidSelectionCont" className="modal-content">
          <h4 id="modalNameTagValidSelectionMsg" key="modalNameTagCheckUpdMessage">Please provide Nametag Display Name and Quantity to proceed.</h4><br /><br />
          <button id="modalNameTagValidSelectionOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
      <div id="modalUserTypeValidMsg" className="modal">
        <div id="modalUserTypeValidMsgCont" className="modal-content">
          <h4 id="lblUserTypeValidMsg" key="lblUserTypeValidMsg">MCI user cannot apply NameTag for Dealer!</h4><br /><br />
          <button id="btnUserTypeValidMsgOk" type="button" key="btnOrdValidationOk" className="btn btn-dark primary_btn">Ok</button>
        </div>
      </div>
    </div>                
  </div>`;
</div>;
};

export default CreateOrder;
