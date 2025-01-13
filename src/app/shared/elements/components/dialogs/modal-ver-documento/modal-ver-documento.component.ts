import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-modal-ver-documento",
  templateUrl: "./modal-ver-documento.component.html",
  styleUrls: ["./modal-ver-documento.component.css"],
})
export class ModalVerDocumentoComponent implements OnInit {
  documentoSrc: any;

  constructor(@Inject(MAT_DIALOG_DATA) public documentoBase64: any) {}

  ngOnInit(): void {
    const arrayBuffer = this.base64ToArrayBuffer(this.documentoBase64);
    this.documentoSrc = new Uint8Array(arrayBuffer);
  }

  base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
