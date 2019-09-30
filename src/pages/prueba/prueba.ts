import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the PruebaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prueba',
  templateUrl: 'prueba.html',
})


export class PruebaPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private file: File, private ft: FileTransfer,
    private fileOpener: FileOpener, private document: DocumentViewer) {
  }

  openLocalPdf() {
    let filePath = this.file.applicationDirectory + '../../assets/ppp.pdf';

    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, '5-tools.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      this.document.viewDocument(`${filePath}/5-tools.pdf`, 'application/pdf', options);
    }
  }

  downloadAndOpenPdf() {
    let downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();

    transfer.download(downloadUrl, path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();

      if (this.platform.is('ios')) {
        this.document.viewDocument(url, 'application/pdf', {});
      } else {
        this.fileOpener.open(url, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PruebaPage');

    let j2 = localStorage.getItem('b64');

    let url = 'data:application/pdf;base64,' + j2

    window.open(url);
  }


  ir() {

    this.navCtrl.push(HomePage)
  }

}
