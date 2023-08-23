import { Component, ElementRef, ViewChild  } from '@angular/core';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent {

  @ViewChild('pdfTable', {static: false}) public pdfTable!: ElementRef;


  titleWorkOrderCustom : String = "Bienvenido a la creacion de cuenta de cobro para orden de servicio"
  nameSourceUser : String = ""
  idSourceUser : String = ""
  namePlace : String = ""
  nameDateCreation : String = ""
  nameDateRequest : String = ""
  nameTargetUser : String = ""
  idTargetUser : String = ""
  conceptName : String = ""
  conceptValue : String = ""

  ngAfterViewInit(){
  }

  public exportPDF() {
    console.log("Hola")
    const pdfTable = this.pdfTable.nativeElement;
    console.log(pdfTable)
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();

  }

}
