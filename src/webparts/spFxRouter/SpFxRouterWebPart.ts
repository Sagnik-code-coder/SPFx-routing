import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
} from "@microsoft/sp-webpart-base";
//import  from "./components/SpFxRouterWebPart";
import SPFxRouterWebPart from "./components/SpFxRouter";

export default class SpFxRouterWebPartWebPart extends BaseClientSideWebPart<{}> {
  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(SPFxRouterWebPart);

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
}
