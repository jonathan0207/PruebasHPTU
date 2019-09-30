import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { PruebaPage } from '../prueba/prueba';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  key: string = 'b64'
  j: any = '';
  url: any = '';


  constructor(private fileOpener: FileOpener, private file: File, private platform: Platform, private transfer: FileTransfer, public navCtrl: NavController,
    private storage: Storage, private base64: Base64, private document: DocumentViewer) {

    // this.verpdf();

  }

  $scopeview_link = function (url, link_type) {

  }
  volver(url, link_type) {


    this.navCtrl.pop();
  }

  Load() {
    // this.storage.get(this.key).then((val)=>{
    //   console.log('Vea',val)
    // })
    localStorage.clear();

  }

  verpdf() {



    let j = localStorage.getItem('b64');
    if (j != null) {
      let downloadPDF: any = j;
      fetch('data:application/pdf;base64,' + downloadPDF,
        {
          method: "GET"
        }).then(res => res.blob()).then(blob => {
          this.file.writeFile(this.file.externalApplicationStorageDirectory, 'HPTU.pdf', blob, { replace: true }).then(res => {
            this.fileOpener.open(
              res.toInternalURL(),
              'application/pdf'
            ).then((res) => {

            }).catch(err => {
              console.log('open error')
            });
          }).catch(err => {
            console.log('save error')
          });
        }).catch(err => {
          console.log('error')
        });
    }

  }

  // async verpdf() {



  //   let downloadPDF = localStorage.getItem('b64');
  //   let blob2 = localStorage.getItem('blob');

  //   if (downloadPDF != null) {
  //     console.log("base 64 despues de clic:" + downloadPDF);

  //     fetch('data:application/pdf;base64,' + downloadPDF,
  //       {
  //         method: "GET"
  //       }).then(res => res.blob()).then(blob => {
  //         this.file.writeFile(this.file.externalApplicationStorageDirectory, 'HPTU.pdf', blob, { replace: true }).then(res => {
  //           this.fileOpener.open(
  //             res.toInternalURL(),
  //             'application/pdf'
  //           ).then((res) => {

  //           }).catch(err => {
  //             console.log('open error')
  //           });
  //         }).catch(err => {
  //           console.log('save error')
          
  //         });
  //       }).catch(err => {
  //         console.log('error')
  //       });

  //   }
  // }


  descagarPDF() {
    // let path = null;
    // this.url = this.j;
    // if (this.platform.is('ios')) {
    //   path = this.file.applicationDirectory;

    // } else {
    //   path = this.file.dataDirectory;
    // }
    // const transfer = this.transfer.create();
    // transfer.download(this.url, path + 'myfile.pdf').then(entry => {
    //   console.log('download complete: ' + entry.toURL());

    // })

  }

  IraP() {
    this.navCtrl.push(PruebaPage);
  }











}
