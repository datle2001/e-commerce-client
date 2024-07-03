// import { Injectable } from '@angular/core';
// import { S3 } from 'aws-sdk';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class S3Services {
//   constructor() {}

//   /**
//    * Initialize a S3 instance
//    * @returns S3
//    */
//   private initS3(): S3 {
//     return new S3(environment.s3.credentials);
//   }

//   getProductPhotoUrl(photoKey: string): string {
//     let params = {
//       Bucket: environment.s3.photoBucket,
//       Key: photoKey,
//     };

//     let s3 = this.initS3();
//     let photoUrl = s3.getSignedUrl('getObject', params);

//     return photoUrl;
//   }
// }
